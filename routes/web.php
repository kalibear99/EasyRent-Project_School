<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CarController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('HomePage', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/kontakt', fn () => Inertia::render('Contact'));
Route::get('/vyber-aut', [CarController::class, 'index']);
Route::get('/vyber-aut/{id}', [CarController::class, 'reservation'])->name('car.reservation');
Route::get('/o-nas', fn () => Inertia::render('Onas'));

Route::get('/dashboard', fn () => Inertia::render('Dashboard'))
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/login', fn () => Inertia::render('Auth/Login'))->name('login');
Route::get('/register', fn () => Inertia::render('Auth/Register'))->name('register');