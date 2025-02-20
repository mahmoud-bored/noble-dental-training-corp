export function load({ cookies }) {
    const langPref = cookies.get('lang')

    return { 
        langPref
    }
}