<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up() {
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('car_id')->constrained()->onDelete('cascade');
            $table->dateTime('pickup_datetime');
            $table->dateTime('return_datetime');
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('reservations');
    }
};
