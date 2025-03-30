# 📱 Task Manager App — Midterm Project (INF657)

This is my midterm project for the INF657 React Native course. I built a fully functional **Task Manager App** using core React Native concepts including components, state management, navigation, styling, and user interaction.

---

## ✅ Features Implemented

### 1. 🗂 Task List with FlatList (20 points)
- Used `FlatList` to display a list of tasks
- Each task includes:
  - ✅ Title
  - ✅ Description
  - ✅ Category (Home, Work, Fitness, etc.)
  - ✅ Image
- Efficient rendering with smooth scrolling

### 2. 🔍 Task Details Screen with Navigation (15 points)
- Integrated `React Navigation`
- Clicking a task navigates to a details screen showing:
  - ✅ Full title & description
  - ✅ Category
  - ✅ Date & time
  - ✅ Full-size image

### 3. ➕ Add New Task Feature (15 points)
- Add screen with form inputs:
  - ✅ Title & Description (`TextInput`)
  - ✅ Category (`DropDownPicker`)
  - ✅ Date/Time (`DateTimePicker`)
- New tasks are dynamically added to the list using `useState`

### 4. ❌ Swipe-to-Delete (10 points)
- Implemented using `Swipeable` from `react-native-gesture-handler`
- Swipe to reveal delete button and remove task from the list instantly

### 5. 🎨 Styling with Flexbox and Effects (10 points)
- Used `StyleSheet.create()` for clean styling
- Added:
  - ✅ Shadows, borders, padding, and spacing
  - ✅ Flexbox layout for task cards
  - ✅ Clear fonts and visual hierarchy

### 6. 🧪 Debugging and Optimization (10 points)
- Used `console.log()` for form and state testing
- Fast Refresh enabled during dev
- Clean, organized file and folder structure

---

## 📁 Project Structure

```bash
TaskManagerApp/
├── App.js
├── components/
│   └── TaskItem.js
├── screens/
│   ├── HomeScreen.js
│   ├── AddTaskScreen.js
│   └── TaskDetailsScreen.js
├── navigation/
│   └── AppNavigator.js
├── README.md
