<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use App\Models\Car;
use Illuminate\Http\Request;
use Carbon\Carbon;

class ReservationController extends Controller
{
    public function store(Request $request) {
        $request->validate([
            'car_id' => 'required|exists:cars,id',
            'pickup_datetime' => 'required|date|after_or_equal:today',
            'return_datetime' => 'required|date|after:pickup_datetime',
        ]);
    
        $user = auth()->user();
        if (!$user) {
            return response()->json(['message' => 'Musíte být přihlášeni.'], 401);
        }
    
        $pickup = Carbon::parse($request->pickup_datetime);
        $return = Carbon::parse($request->return_datetime);
    
        $exists = Reservation::where('car_id', $request->car_id)
            ->where(function ($query) use ($pickup, $return) {
                $query->whereBetween('pickup_datetime', [$pickup, $return])
                      ->orWhereBetween('return_datetime', [$pickup, $return])
                      ->orWhere(function ($q) use ($pickup, $return) {
                          $q->where('pickup_datetime', '<=', $pickup)
                            ->where('return_datetime', '>=', $return);
                      });
            })
            ->exists();
    
        if ($exists) {
            return response()->json(['message' => 'Toto auto je v daném termínu již rezervováno.'], 409);
        }
    
        $car = Car::findOrFail($request->car_id);
        $days = max(1, $pickup->diffInDays($return));
        $total_price = $days * $car->price;
    
        $reservation = Reservation::create([
            'car_id' => $request->car_id,
            'user_id' => $user->id,
            'pickup_datetime' => $pickup,
            'return_datetime' => $return,
            'total_price' => $total_price,
            'status' => 'pending',
        ]);
    
        return response()->json(['message' => 'Rezervace byla úspěšná!', 'reservation' => $reservation], 201);
    }

    public function index(Request $request)
    {
        $user = auth()->user();  

        if (!$user) {
            return response()->json(['message' => 'Musíte být přihlášeni.'], 401);
        }

        $reservations = Reservation::where('user_id', $user->id)
            ->with(['car', 'user'])
            ->get(); 

        return response()->json($reservations);
    }

    
    public function update(Request $request, $id)
    {
        $user = auth()->user();
        if (!$user) {
            return response()->json(['message' => 'Musíte být přihlášeni.'], 401);
        }

        $reservation = Reservation::where('id', $id)->where('user_id', $user->id)->first();

        if (!$reservation) {
            return response()->json(['message' => 'Rezervace nenalezena.'], 404);
        }

        $reservation->update([
            'status' => 'paid'
        ]);

        return response()->json(['message' => 'Rezervace byla zaplacena!', 'reservation' => $reservation]);
    }

}
