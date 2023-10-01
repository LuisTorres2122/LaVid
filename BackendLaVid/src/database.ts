import { connect } from 'mongoose'

export async function startConnection() {
    const uriBD = process.env.URI;
    if(uriBD){
        const db = await connect(uriBD);
        console.log('Database is connected');
    }else{
        console.log('Check URIBD')
    }
    
    
}
