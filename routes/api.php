<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ApiContactController;
use App\Http\Controllers\CarController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->get('/user', [AuthController::class, 'user']);
Route::post('/logout', [AuthController::class, 'logout']);
Route::post('/contact', [ApiContactController::class, 'sendEmail']);

Route::get('/cars', [CarController::class, 'apiIndex']);
Route::get('/cars/{id}', [CarController::class, 'show']);
Route::get('/filter-options', [CarController::class, 'getFilterOptions']);
