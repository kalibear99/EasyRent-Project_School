<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'price',
        'image',
        'description',
        'brand',
        'model',
        'year',
        'category',
        'seats',
        'color',
        'fuel',
        'engine',
        'power',
        'transmission',
        'deposit'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'price' => 'integer',
        'year' => 'integer',
        'seats' => 'integer',
        'deposit' => 'integer',
    ];
}