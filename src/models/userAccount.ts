interface iUserAccount {
    id: string;
    email:string;
    whatsapp:string;
    instagram: string;
    followersCount: number;
    conversionRate:number;
    priceForPost:number;
    location:string;
    categories: Category[];
}

class UserAccount implements iUserAccount 
{
    categories!: Category[];
    id!: string;    
    email!: string;
    whatsapp!: string;
    instagram!: string;
    followersCount!: number;
    conversionRate!: number;
    priceForPost!: number;
    location!: string;
}