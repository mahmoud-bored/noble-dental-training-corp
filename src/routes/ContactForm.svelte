<script lang="ts">
    import { enhance } from "$app/forms";
  import { page } from "$app/state";

    let { 
        isCurrentLangAr, 
        loading = $bindable(), 
        loadingSuccess = $bindable(), 
        loadingError = $bindable() 
    } : { 
        isCurrentLangAr: boolean, 
        loading: boolean,
        loadingSuccess: boolean,
        loadingError: boolean
    } = $props()

    let phoneNumber: number|undefined = $state()
    let email: string|undefined = $state()
</script>

<form 
    action="" 
    method="POST" 
    class="w-full p-2 flex flex-col justify-center items-center gap-2" 
    dir={ isCurrentLangAr ? "rtl" : "ltr" }
    use:enhance={() => {
        loading = true
        return async ({ update }) => {
            await update()
        }
    }}
>


    <input 
        class="w-full bg-white p-3 rounded-sm" 
        type="text" 
        name="name"
        placeholder={isCurrentLangAr ? "الاسم" : "Name"} 
        required
    />
    <input 
        class="w-full bg-white p-3 rounded-sm" 
        type="number" 
        name="phoneNumber"
        dir="{ isCurrentLangAr ? phoneNumber ? "ltr": "rtl" : 'ltr' }"
        placeholder={isCurrentLangAr ? "رقم الجوال" : "Phone Number"} 
        bind:value={ phoneNumber }
        required
    />
    <input 
        class="w-full bg-white p-3 rounded-sm mt-1" 
        type="email" 
        name="email"
        dir="{ isCurrentLangAr ? email ? "ltr": "rtl" : 'ltr' }"
        placeholder={isCurrentLangAr ? "البريد الالكتروني" : "Email"} 
        bind:value={ email }
        required
    />
    <textarea 
        class="w-full bg-white p-3 rounded-sm resize-none h-40" 
        name="message"
        placeholder={isCurrentLangAr ? "رسالتك..." : "Your message..."} 
        required
    ></textarea>


    <button type="submit" class="w-full max-w-xs h-12 mt-2 flex justify-center items-center gap-4 bg-navy-500 hover:bg-navy-600 transition duration-200 text-white text-lg p-3 rounded-full font-bold cursor-pointer">
        { isCurrentLangAr ? "ارسل" : "Send" }
        <svg width="25" height="25" viewBox="0 0 543 538" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M478.525 427.319L537.238 35.603C539.423 21.027 524.122 10.1469 511.071 16.9971L33.4859 267.685C21.0408 274.218 22.4622 292.472 35.7685 297L167.883 341.95C168.885 342.291 169.993 342.078 170.798 341.39L446.038 106.159C446.969 105.363 448.24 106.618 447.456 107.559L236.286 361.155C234.941 362.77 235.63 365.231 237.618 365.912L456.197 440.88C466.242 444.325 476.951 437.82 478.525 427.319Z" fill="white"/>
            <path d="M214.655 391.421L295.936 419.611C297.209 420.052 297.69 421.601 296.891 422.686L240.885 498.763C231.726 511.204 212 504.726 212 489.278V393.311C212 391.935 213.356 390.97 214.655 391.421Z" fill="white"/>
        </svg>
    </button>

</form>