<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    protected $fillable = [
        'car_id',
        'pickup_datetime',
        'return_datetime',
        'user_id',
        'total_price',
    ];
}
