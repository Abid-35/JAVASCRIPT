let url = "https://catfact.ninja/fct";
 async function get_fact() {
    try {
        let response = await axios.get(url);
        let data = response.data.fact;
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
    
 }