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
Route::get('/obchodni-podminky', fn () => Inertia::render('TermsAndConditions'));

Route::get('/dashboard', fn () => Inertia::render('Dashboard'))
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/profile/update', [ProfileController::class, 'updateProfile'])->name('profile.updateProfile');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/login', fn () => Inertia::render('Auth/Login'))->name('login');
Route::get('/register', fn () => Inertia::render('Auth/Register'))->name('register');

Route::get('/my-profile', fn () => Inertia::render('MyProfile'))->middleware('auth');
Route::get('/rezervace', fn () => Inertia::render('YourReservations'))->middleware('auth');