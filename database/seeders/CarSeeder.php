<?php

namespace Database\Seeders;

use App\Models\Car;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $cars = [
            [
                'name' => 'BMW X5',
                'price' => 1500,
                'image' => '/resources/assets/bmw-x5.png',
                'description' => 'BMW X5 je luxusní SUV, které nabízí vynikající výkon a komfort. S moderními technologiemi a prostorným interiérem je ideální volbou pro dlouhé cesty i každodenní jízdu. Tento vůz je vybaven pokročilými bezpečnostními funkcemi a kvalitními materiály, které zajišťují vysoký standard pohodlí a elegance. Je to ideální volba pro náročné řidiče, kteří hledají špičkový výkon a styl.',
                'brand' => 'BMW',
                'model' => 'X5',
                'year' => 2023,
                'category' => 'SUV',
                'seats' => 5,
                'color' => 'Černá',
                'fuel' => 'Benzín',
                'engine' => '3000 ccm',
                'power' => '195 kW',
                'transmission' => 'Automat',
                'deposit' => 40000
            ],
            [
                'name' => 'Audi Q7',
                'price' => 1800,
                'image' => '/resources/assets/car.png',
                'description' => 'Audi Q7 je luxusní SUV, které nabízí kombinaci výkonu, komfortu a prostornosti. Vybaveno moderními technologiemi a bezpečnostními funkcemi, je ideální volbou pro dlouhé cesty i každodenní použití. Velký interiér zajišťuje pohodlí pro všechny cestující, zatímco silný motor a špičkové jízdní vlastnosti poskytují vynikající zážitek z jízdy.',
                'brand' => 'Audi',
                'model' => 'Q7',
                'year' => 2022,
                'category' => 'SUV',
                'seats' => 7,
                'color' => 'Modrá',
                'fuel' => 'Nafta',
                'engine' => '3000 ccm',
                'power' => '210 kW',
                'transmission' => 'Automat',
                'deposit' => 45000
            ],
            [
                'name' => 'Mercedes-Benz GLE',
                'price' => 2200,
                'image' => '/resources/assets/car.png',
                'description' => 'Mercedes-Benz GLE je prestižní SUV, které spojuje špičkový výkon, komfort a luxusní design. S moderními technologiemi a prostorným interiérem nabízí vynikající zážitek z jízdy, ať už na dálnici nebo v městském provozu. Tento vůz je vybaven pokročilými asistenčními systémy a kvalitními materiály, které zajišťují maximální pohodlí a bezpečnost. GLE je ideální volbou pro náročné řidiče, kteří hledají perfektní kombinaci výkonu, elegance a inovace ve svém automobilu.',
                'brand' => 'Mercedes-Benz',
                'model' => 'GLE',
                'year' => 2023,
                'category' => 'SUV',
                'seats' => 5,
                'color' => 'Stříbrná',
                'fuel' => 'Benzín',
                'engine' => '3500 ccm',
                'power' => '230 kW',
                'transmission' => 'Automat',
                'deposit' => 50000
            ],
            [
                'name' => 'Ford Kuga',
                'price' => 1600,
                'image' => '/resources/assets/car.png',
                'description' => 'Ford Kuga je moderní SUV, které kombinuje praktické vlastnosti s vynikajícím výkonem a nízkou spotřebou. Tento vůz nabízí prostorný interiér, ideální pro rodinné výlety nebo každodenní použití. Kuga je vybavena nejnovějšími technologiemi, včetně intuitivního infotainment systému a pokročilých bezpečnostních prvků, které zajišťují pohodlí a ochranu na každé cestě. S atraktivním designem a špičkovým zpracováním je Ford Kuga ideální volbou pro každého, kdo hledá spolehlivý a stylový automobil pro každodenní život',
                'brand' => 'Ford',
                'model' => 'Kuga',
                'year' => 2022,
                'category' => 'SUV',
                'seats' => 5,
                'color' => 'Červená',
                'fuel' => 'Nafta',
                'engine' => '2000 ccm',
                'power' => '140 kW',
                'transmission' => 'Manuál',
                'deposit' => 35000
            ],
            [
                'name' => 'Volkswagen Tiguan',
                'price' => 1700,
                'image' => '/resources/assets/car.png',
                'description' => 'Volkswagen Tiguan je kompaktní SUV, které nabízí skvělou rovnováhu mezi výkonem, efektivitou a pohodlím. S moderním designem a precizně zpracovaným interiérem je ideální volbou pro každodenní jízdu i víkendové výlety. Tento vůz je vybaven nejnovějšími technologiemi pro bezpečnost a zábavu, které zajišťují příjemný zážitek za volantem. Tiguan je ideální pro řidiče, kteří hledají spolehlivý, praktický a stylový automobil pro každou příležitost.',
                'brand' => 'Volkswagen',
                'model' => 'Tiguan',
                'year' => 2022,
                'category' => 'SUV',
                'seats' => 5,
                'color' => 'Šedá',
                'fuel' => 'Nafta',
                'engine' => '2000 ccm',
                'power' => '150 kW',
                'transmission' => 'Automat',
                'deposit' => 38000
            ],
            [
                'name' => 'Acura RDX',
                'price' => 2000,
                'image' => '/resources/assets/car.png',
                'description' => 'Stylové a sportovní SUV, které nabízí výjimečný výkon a pohodlí.',
                'brand' => 'Acura',
                'model' => 'RDX',
                'year' => 2023,
                'category' => 'SUV',
                'seats' => 5,
                'color' => 'Bílá',
                'fuel' => 'Nafta',
                'engine' => '2200 ccm',
                'power' => '142 kW',
                'transmission' => 'Automat',
                'deposit' => 45000
            ],
        ];

        foreach ($cars as $car) {
            Car::create($car);
        }
    }
}
