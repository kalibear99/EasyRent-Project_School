<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\JsonResponse;

class ApiContactController extends Controller
{
    public function sendEmail(Request $request): JsonResponse
    {
        // Validace
        $validated = $request->validate([
            'email' => 'required|email',
            'phone' => 'required',
            'message' => 'required|min:1',
        ]);

        // Odeslání emailu
        Mail::raw(
            "Telefon: " . $request->phone . "\n\nZpráva: " . $request->message,
            function ($message) use ($request) {
                $message->to(env('CONTACT_EMAIL', 'kalistdarien8@gmail.com')) // Email příjemce
                        ->subject('Nový kontaktní formulář')
                        ->from($request->email);
            }
        );

        return response()->json(['success' => true, 'message' => 'Email odeslán!']);
    }
}
