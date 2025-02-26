export const FetchAdvice = async() => {
    const promise = await fetch(`https://api.adviceslip.com/advice`);
    const data = await promise.text();
    return data;
}