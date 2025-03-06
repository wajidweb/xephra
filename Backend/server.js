// server.js
const express = require("express");
const cors = require("cors");
const http = require("http"); 
const dotenv = require("dotenv");
const connectDB = require("./config/db");
dotenv.config(); // Load environment variables
const path = require("path");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");
const rankingRoutes = require('./routes/rankingRoutes');
const upload = require("./config/multerConfig");
const cookieParser = require("cookie-parser");
const socketSetup = require("./Socket/index"); // 

const passport = require('./config/passport');
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

const server = http.createServer(app);

// Middleware
app.use(cookieParser());
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000", 
  //  origin: "https://xephra.vercel.app", 
  //origin: "https://xephra.net", // Allow only your frontend
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  credentials: true, // **Required for JWT authentication**
};


app.use(cors(corsOptions)); 
app.options("*", cors(corsOptions));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});


app.use(passport.initialize());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.urlencoded({ extended: true }));



// Routes
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);
app.use('/rank', rankingRoutes);

// Connect to MongoDB
connectDB();

// Sample route
app.get("/", (req, res) => {
  res.send("Game Events API");
});

// Setup Socket.io
socketSetup(server);

// Start server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
