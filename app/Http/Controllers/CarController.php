<?php

namespace App\Http\Controllers;

use App\Models\Car;
use Illuminate\Http\Request;

class CarController extends Controller
{
    public function index(Request $request)
    {
        $query = Car::query();

        // Filtrování podle parametrů
        if ($request->has('brand')) {
            $query->where('brand', $request->input('brand'));
        }

        if ($request->has('model')) {
            $query->where('model', $request->input('model'));
        }

        if ($request->has('year')) {
            $query->where('year', $request->input('year'));
        }

        if ($request->has('price_min') && $request->has('price_max')) {
            $query->whereBetween('price', [$request->input('price_min'), $request->input('price_max')]);
        }

        // Další možné filtry podle potřeby

        // Získání výsledků
        $cars = $query->get();

        return response()->json($cars);
    }
}
