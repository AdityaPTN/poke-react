import axios from 'axios';
import create from 'zustand';

const usePoke = create((set)=> ({
    pokemon: {},
    fetch: async(url) => {
        const res = await axios.get(url);
        console.log("res", res)
        set({pokemon: await res.data.results})
    }
}))

export default usePoke