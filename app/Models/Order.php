<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'reservation_id',
        'user_id',
        'total_price',
        'status'
    ];

    public function reservation() {
        return $this->belongsTo(Reservation::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
