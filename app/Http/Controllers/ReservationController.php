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
        
        $reservation = Reservation::create([
            'car_id' => $request->car_id,
            'pickup_datetime' => $pickup,
            'return_datetime' => $return,
        ]);

        return response()->json(['message' => 'Rezervace byla úspěšná!', 'reservation' => $reservation], 201);
    }
}
