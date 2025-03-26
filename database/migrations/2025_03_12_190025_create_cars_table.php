<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('price');
            $table->string('image')->nullable();
            $table->text('description');
            $table->string('brand');
            $table->string('model');
            $table->integer('year');
            $table->string('category');
            $table->integer('seats');
            $table->string('color');
            $table->string('fuel');
            $table->string('engine');
            $table->string('power');
            $table->string('transmission');
            $table->integer('deposit');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cars');
    }
};