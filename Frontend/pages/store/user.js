import { defineStore } from 'pinia';

export const useUser = defineStore('user', {
  persist: {
    storage: piniaPluginPersistedstate.sessionStorage(),
  },

  state: () => ({
      name: "",
      surname: "",
      email: "",
      pictureURL: ""
  }),
  
  actions: {
    setUser(name, surname, email){
        this.name = name;
        this.surname = surname;
        this.email = email;
    },
    
    setPicture(picture){
        const uint8Array = new Uint8Array(picture.data);
        const detectMimeType = (data) => {
            if (data[0] === 0xFF && data[1] === 0xD8) return 'image/jpeg'; 
            if (data[0] === 0x89 && data[1] === 0x50 && data[2] === 0x4E && data[3] === 0x47) return 'image/png';
            if (data[0] === 0x47 && data[1] === 0x49 && data[2] === 0x46) return 'image/gif';
            return 'application/octet-stream'; 
        }
        const mimeType = detectMimeType(uint8Array);
        const blob = new Blob([uint8Array], { type: mimeType });
        const blobURL = URL.createObjectURL(blob);
        this.pictureURL = blobURL;
    }
  },
});