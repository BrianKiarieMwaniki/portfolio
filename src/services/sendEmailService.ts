import httpService from "./httpService";

const apiUrl = process.env.REACT_APP_API_URL;

type SendEmailPayload = {
    client_name:string;
    client_email:string;
    message: string;
}

export function sendEmail(email:SendEmailPayload)
{
    return httpService.post(`${apiUrl}`, email);
}