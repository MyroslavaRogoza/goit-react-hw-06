import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts.items = state.contacts.items.filter((contact) => {
        return contact.id !== action.payload;
      });
    },
  },
});
export const { addContact, deleteContact } =
  contactsSlice.actions;

export const selectContacts = state => state.contacts.contacts.items;

export const contactsReducer = contactsSlice.reducer;
