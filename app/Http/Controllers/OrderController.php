<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Reservation;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'reservation_id' => 'required|exists:reservations,id',
            'total_price' => 'required|numeric|min:0',
        ]);

        $order = Order::create([
            'reservation_id' => $request->reservation_id,
            'total_price' => $request->total_price,
            'status' => 'pending', 
        ]);

        return response()->json([
            'message' => 'Objednávka byla úspěšně vytvořena.',
            'order' => $order
        ], 201);
    }

    public function updateStatus(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|in:pending,paid,canceled',
        ]);

        $order = Order::findOrFail($id);
        $order->update(['status' => $request->status]);

        return response()->json([
            'message' => 'Stav objednávky byl aktualizován.',
            'order' => $order
        ]);
    }
}
