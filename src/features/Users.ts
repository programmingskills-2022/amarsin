import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL =
  "http://ps.dotis.ir/api/UserApi/login?_userName=mostol&_pass=123&player_id=0&_customerTyp=9";
