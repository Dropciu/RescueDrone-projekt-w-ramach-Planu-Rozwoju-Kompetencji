require('dotenv').config();
const express = require('express');
const session = require('cookie-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require("express-rate-limit");
const slowDown = require("express-slow-down");
const hpp = require('hpp');
const compression = require('compression');
const authRoutes = require('./routes/authRoutes');
const panelRoutes = require('./routes/panelRoutes');


const app = express();

app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin: ['http://localhost:3000'],
    'Access-Control-Allow-Origin': ['http://localhost:3000'],
    'Access-Control-Allow-Credentials': true,
    "methods": "GET,POST, PUT",
    credentials: true
}));

app.use(session({
  name: '9SbSydfUrz',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.use(helmet());
app.use(hpp());
app.use(rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 10000, // Limit each IP to 10000 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
}));
app.use(slowDown({
	windowMs: 60 * 1000, // 1 minute
	delayAfter: 5000, // 50 per minute without delay
	delayMs: (hits) => hits * 100,
}));
app.use(compression())
app.set('trust proxy', 1);
app.disable('x-powered-by');



app.use('/auth', authRoutes);
app.use('/panel', panelRoutes);


app.get("/", (req, res) => {
  //res.redirect("https://drobify.drobik.site")
  res.send("Okay")
})
app.get("/start", (req, res) => {
  res.send("Server is running")
})




const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
