import 'package:flutter/material.dart';
import 'package:encode_app/constants/app_colors.dart';
import 'package:encode_app/widgets/shared_bottom_nav.dart';
import 'package:encode_app/widgets/profile_drawer.dart';

class DetailScreen extends StatelessWidget {
  const DetailScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      endDrawer: const ProfileDrawer(),
      bottomNavigationBar: const SharedBottomNav(),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20.0),
          child: Column(
            children: [
              const SizedBox(height: 20),
               // Header
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text(
                    'Hello Pragati,',
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  IconButton(
                    icon: const Icon(Icons.person_outline, size: 28),
                    onPressed: () => Scaffold.of(context).openEndDrawer(),
                  ),
                ],
              ),
              const SizedBox(height: 20),

              // Query Box (Static for now as per design)
               Container(
                width: double.infinity,
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: Colors.white.withOpacity(0.8),
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: Colors.black12),
                ),
                child: const Text(
                  "Rice, Tomato, Onion, Paneer,\nTurmeric, ABCD 1010001, XYZ\n100099090, GUIUIUI,\nXYZZZZZ.",
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                ),
              ),
              const SizedBox(height: 20),

              // Large Details Box (Enlarged View)
              Expanded(
                child: Container(
                  width: double.infinity,
                  padding: const EdgeInsets.all(20),
                  decoration: BoxDecoration(
                    color: AppColors.lemonYellow.withOpacity(0.5), // Slightly darker/merged look
                    borderRadius: BorderRadius.circular(16),
                    border: Border.all(color: Colors.black12),
                  ),
                  child: SingleChildScrollView(
                    child: const Text(
                      "1.Tomato – A juicy fruit rich in vitamin C\nthat boosts immunity and skin health.\n\n"
                      "2.Onion – A flavorful bulb that aids\ndigestion and helps regulate blood sugar.\n\n"
                      "Spinach – A leafy green loaded with iron\nand essential vitamins.\n\n"
                      "Garlic – A pungent spice known for its\nantibacterial and heart-healthy\nproperties.\n\n"
                      "Ginger – A warming root that reduces\nnausea and improves digestion.",
                      style: TextStyle(fontSize: 16, height: 1.5, fontWeight: FontWeight.w600),
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 20),
              
               // Bottom Search Bar
               Container(
                decoration: BoxDecoration(
                   color: Colors.white,
                   borderRadius: BorderRadius.circular(30),
                   border: Border.all(color: Colors.black12),
                ),
                padding: const EdgeInsets.symmetric(horizontal: 16),
                child: Row(
                  children: [
                    const Icon(Icons.search, color: Colors.grey),
                    const SizedBox(width: 10),
                     const Expanded(
                      child: TextField(
                        decoration: InputDecoration(
                          hintText: "Search",
                          border: InputBorder.none,
                        ),
                      ),
                    ),
                     IconButton(
                      icon: const Icon(Icons.camera_alt, color: Colors.black54),
                      onPressed: () {},
                    ),
                    IconButton(
                      icon: const Icon(Icons.add),
                      onPressed: () {},
                    )
                  ],
                ),
              ),
              const SizedBox(height: 20),
            ],
          ),
        ),
      ),
    );
  }
}
