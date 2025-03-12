<?php

namespace App\Http\Controllers;

use App\Models\Car;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CarController extends Controller
{
    public function index(Request $request)
    {
        $query = Car::query();

        if ($request->has('brand')) {
            $query->where('brand', $request->input('brand'));
        }

        if ($request->has('model')) {
            $query->where('model', $request->input('model'));
        }

        if ($request->has('fuel')) {
            $query->where('fuel', $request->input('fuel'));
        }

        if ($request->has('category')) {
            $query->where('category', $request->input('category'));
        }

        $sortBy = $request->input('sort_by', 'price');
        $sortDirection = $request->input('sort_direction', 'asc');
        $query->orderBy($sortBy, $sortDirection);

        $cars = $query->get();

        $brands = Car::select('brand')->distinct()->orderBy('brand')->pluck('brand');
        $models = Car::select('model')->distinct()->orderBy('model')->pluck('model');
        $fuels = Car::select('fuel')->distinct()->orderBy('fuel')->pluck('fuel');
        $categories = Car::select('category')->distinct()->orderBy('category')->pluck('category');

        return Inertia::render('CarCards', [
            'cars' => $cars,
            'filters' => [
                'brands' => $brands,
                'models' => $models,
                'fuels' => $fuels,
                'categories' => $categories,
            ],
            'activeFilters' => $request->only(['brand', 'model', 'fuel', 'category', 'sort_by', 'sort_direction']),
        ]);
    }

    public function show($id)
    {
        $car = Car::findOrFail($id);
        return Inertia::render('Cars/Show', [
            'car' => $car
        ]);
    }

    public function apiIndex(Request $request)
    {
        $query = Car::query();

        if ($request->has('brand')) {
            $query->where('brand', $request->input('brand'));
        }

        if ($request->has('model')) {
            $query->where('model', $request->input('model'));
        }

        if ($request->has('fuel')) {
            $query->where('fuel', $request->input('fuel'));
        }

        if ($request->has('category')) {
            $query->where('category', $request->input('category'));
        }

        $sortBy = $request->input('sort_by', 'price');
        $sortDirection = $request->input('sort_direction', 'asc');
        $query->orderBy($sortBy, $sortDirection);

        $cars = $query->get();

        return response()->json($cars);
    }

    public function getFilterOptions()
    {
        $brands = Car::select('brand')->distinct()->orderBy('brand')->pluck('brand');
        $models = Car::select('model')->distinct()->orderBy('model')->pluck('model');
        $fuels = Car::select('fuel')->distinct()->orderBy('fuel')->pluck('fuel');
        $categories = Car::select('category')->distinct()->orderBy('category')->pluck('category');

        return response()->json([
            'brands' => $brands,
            'models' => $models,
            'fuels' => $fuels,
            'categories' => $categories,
        ]);
    }

    public function reservation($id)
    {
        $car = Car::findOrFail($id);
        return Inertia::render('CarReservation', [
            'car' => $car
        ]);
    }
}
