import { useRuntimeConfig } from '#app'



const getMe = async () => {
    try {
        const runtimeConfig = useRuntimeConfig()
    
        const res = await fetch(`${runtimeConfig.public.serverURL}/panel/getMe`, {
            method: 'GET',
            credentials: 'include',
        });

        if (res.ok) {
            return await res.json();
        }
        else{
            return "err"
        }
    } catch (err) {
        return "err"
    }
}

const getMyPicture = async () => {
    try {
        const runtimeConfig = useRuntimeConfig()
        
        const res = await fetch(`${runtimeConfig.public.serverURL}/panel/getMyPicture`, {
            method: 'GET',
            credentials: 'include',
        });

        if (res.ok) {
            return await res.json();
        }
        else{
            return "err"
        }
    } catch (err) {
        return "err"
    }
}


const getDrones = async () => {
    try {
        const runtimeConfig = useRuntimeConfig()

        const res = await fetch(`${runtimeConfig.public.serverURL}/panel/getDrones`, {
            method: 'GET',
            credentials: 'include',
        });

        if (res.ok) {
            return await res.json();
        }
        else{
            return "err"
        }
    } catch (err) {
        return "err"
    }
}


const updateDroneName = async (droneId, newName) => {
    try {
        const runtimeConfig = useRuntimeConfig()

        const res = await fetch(`${runtimeConfig.public.serverURL}/panel/updateDroneName`, {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify({
                droneId: droneId,
                newName: newName
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (res.ok) {
            return res;
        }
        else{
            return "err"
        }
    } catch (err) {
        return "err"
    }
}



const updateDroneComment = async (droneId, newComment) => {
    try {
        const runtimeConfig = useRuntimeConfig()

        const res = await fetch(`${runtimeConfig.public.serverURL}/panel/updateDroneComment`, {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify({
                droneId: droneId,
                newComment: newComment
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (res.ok) {
            return res;
        }
        else{
            return "err"
        }
    } catch (err) {
        return "err"
    }
}


const updateDronePicture = async (droneId, file) => {
    
    const formData = new FormData();
    formData.append('image', file)

    try {
        const runtimeConfig = useRuntimeConfig()
        
        const res = await fetch(`${runtimeConfig.public.serverURL}/panel/updateDronePicture?droneId=${droneId}`, {
            method: 'POST',
            credentials: 'include',
            body: formData,
        });

        if (res.ok) {
            return res;
        }
        else{
            return "err"
        }
    } catch (err) {
        return "err"
    }
}

export { getMe, getMyPicture, getDrones, updateDroneName, updateDroneComment, updateDronePicture }