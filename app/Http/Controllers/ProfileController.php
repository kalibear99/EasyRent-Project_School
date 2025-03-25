<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    public function edit(Request $request): Response
    {
        return Inertia::render('MyProfile', [
            'user' => $request->user(),
        ]);
    }

    public function updateProfile(Request $request)
    {
        $user = Auth::user();

        // Opravená validace
        $request->validate([
            'first_name' => 'nullable|string|max:255',
            'last_name' => 'nullable|string|max:255',
            'bio' => 'nullable|string|max:500',
            'profile_picture' => 'nullable|image|max:2048',
        ]);

        // Pokud je nahrán nový obrázek
        if ($request->hasFile('profile_picture')) {
            // Smazání starého obrázku (pokud existuje)
            if ($user->profile_picture) {
                Storage::disk('public')->delete(basename($user->profile_picture));
            }

            // Uložení nového obrázku
            $imagePath = $request->file('profile_picture')->store('profile_pictures', 'public');
            $user->profile_picture = "/storage/" . $imagePath;
        }

        // Aktualizace uživatelských informací
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->bio = $request->bio;
        $user->save();

        return response()->json(['message' => 'Profil úspěšně aktualizován!', 'user' => $user]);
    }

    public function destroy(Request $request)
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        if ($user->profile_picture) {
            Storage::disk('public')->delete(basename($user->profile_picture));
        }

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
