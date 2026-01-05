# Food Info Bot 🍎🤖

Food Info Bot is an AI-powered assistant designed to help consumers understand food ingredients better. By leveraging advanced AI analysis, it provides concise, clear, and non-alarmist information about what's in your food, helping you make more informed dietary choices.

## 🚀 Features

- **Ingredient Analysis**: Get detailed yet easy-to-understand insights into food ingredients.
- **Smart Search**: Quickly look up specific ingredients or food components.
- **Image & File Support**: Upload photos of ingredient lists or documents for instant analysis (via `image_picker` and `file_picker`).
- **Daily Food Facts**: Stay informed with interesting daily nutrition facts.
- **Privacy Focused**: Direct analysis targeting specific consumer concerns without medical advice.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Flutter](https://flutter.dev/)
- **State Management**: Standard Flutter widgets (Stateless/Stateful)
- **UI Components**: Material 3, Google Fonts (Roboto)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **AI Engine**: [Google Gemini API](https://ai.google.dev/) (`gemini-2.5-flash`)

## 🏗️ Project Structure

```text
.
├── lib/               # Flutter frontend source code
│   ├── screens/       # UI Screens (Home, Analysis, Detail, etc.)
│   ├── widgets/       # Reusable UI components
│   └── constants/     # App-wide constants (AppColors, etc.)
├── Backend/           # Node.js backend source code
│   ├── src/
│   │   ├── routes/    # API endpoints
│   │   └── services/  # Business logic & AI integration
│   └── uploads/       # Temporary storage for uploads
└── pubspec.yaml       # Flutter dependencies
```

## 🔗 API Integration

The Flutter frontend communicates with the Node.js backend via REST API.

### Connection Details
- **Base URL**: `http://localhost:5000/api` (default)
- **Endpoint**: `/analyze`
- **Method**: `POST`
- **Payload**:
  ```json
  {
    "ingredients": "Raw ingredient text from user"
  }
  ```
- **Response**:
  ```json
  {
    "analysis": "AI-generated analysis text"
  }
  ```

### Connecting from Flutter
To connect the frontend to the backend, ensure the backend is running and update the API base URL in your Flutter configuration (usually in a `constants/api_config.dart` or similar).

> [!TIP]
> If testing on an Android Emulator, use `10.0.2.2` instead of `localhost` to refer to your machine's local server.

## ⚙️ Setup Instructions

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```
2. Create a `test.env` file (or use existing) and add your Gemini API Key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Ensure you have Flutter installed on your system.
2. Run `flutter pub get` to install dependencies.
3. Run the application:
   ```bash
   flutter run
   ```

## 📝 Disclaimer
This bot provides general information based on ingredient lists. It does **not** provide medical advice. Always consult with a healthcare professional for dietary concerns.

