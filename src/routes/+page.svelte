<script lang="ts">
    import { goto } from "$app/navigation";
    import { fade, fly } from "svelte/transition";
    import { langPreference } from "./stores.svelte";
    import orthodonticsMembershipSVG from "$lib/assets/orthodontics-membership.svg"
    import Card from "./Card.svelte";
    import CollapseCard from "./CollapseCard.svelte";
    import ContactForm from "./ContactForm.svelte";
    let isCurrentLangAr = $derived(langPreference.lang == 'ar')
    $inspect(isCurrentLangAr)
</script>



<main class="h-full w-full flex flex-col items-center gap-10">
    <section class="w-full h-[calc(100vh-64px)] max-h-screen">
        <div class="w-full h-full relative">

            <div class="h-full w-full flex justify-center items-center text-white">
                {#if isCurrentLangAr}
                    <div class="w-8/10 flex justify-center items-start flex-col gap-3" in:fly={{ x: 50, duration: 200 }} dir="rtl">
                        <h1 class="font-bold text-3xl">
                            برنامج الزمالة البريطانية لتقويم الأسنان
                        </h1>
                        <p class="text-lg max-w-[420px] mr-4">
                            احصل على تأهيل شامل وعملي لتحقق طموحك المهني بإشراف استشاريين معتمدين.
                        </p>
                        <a href="#contact-us">
                            <button class="mr-4 bg-gold-500 p-4 px-6 w-56 h-14 cursor-pointer font-bold text-xl rounded-lg flex justify-between items-center hover:bg-gold-600 transition duration-200">
                                <span>
                                    سجل الآن
                                </span>
                                <svg width="51" height="20" viewBox="0 0 51 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M47.9998 15L6.99975 15" stroke="white" stroke-width="5" stroke-linecap="round"/>
                                    <path d="M18.8 27L4.24558 16.1385C3.14533 15.3174 3.1805 13.6573 4.31453 12.8835L18.8 3" stroke="white" stroke-width="5" stroke-linecap="round"/>
                                </svg>
                            </button>
                        </a>
                    </div>
                {:else}
                    <div class="w-8/10 flex justify-center items-start flex-col gap-3" in:fly={{ x: -50, duration: 200 }} dir="ltr">
                        <h1 class="font-bold text-3xl">
                            England MOrth Training Corp.
                        </h1>
                        <p class="text-lg max-w-[420px] ml-4">
                            Get comprehensive and practical training to achieve your professional ambition under the supervision of certified consultants.
                        </p>
                        <a href="#contact-us">
                            <button class="ml-4 bg-gold-500 p-4 px-6 w-56 h-14 cursor-pointer font-bold text-xl rounded-lg flex justify-between items-center hover:bg-gold-600 transition duration-200">
                                <span>
                                    Enroll Now
                                </span>
                                <svg width="51" height="20" viewBox="0 0 51 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 15L44 15" stroke="white" stroke-width="5" stroke-linecap="round"/>
                                    <path d="M32.1997 27L46.7542 16.1385C47.8544 15.3174 47.8193 13.6573 46.6852 12.8835L32.1997 3" stroke="white" stroke-width="5" stroke-linecap="round"/>
                                </svg>
                            </button>
                        </a>
                    </div>
                {/if}
            </div>

            <div class="absolute top-0 z-[-1] w-full h-full flex justify-center items-center overflow-hidden bg-[url($lib/assets/main-page-bg.png)] bg-center">
                {#if isCurrentLangAr}
                    <div class="w-full h-full absolute bg-linear-90 from-black/50 via-black/70 to-black/80" transition:fade={{ duration: 100 }}></div>
                {:else}
                    <div class="w-full h-full absolute -bg-linear-90 from-black/50 via-black/70 to-black/80" transition:fade={{ duration: 100 }}></div>
                {/if}
            </div>
        </div>
    </section>

    <hr class="w-8/10 max-w-32 border-2 rounded-full border-navy-600">


    {#snippet card1Description()}
        <p class={[
            isCurrentLangAr ? "mr-4" : "ml-4", 
            "w-full",
            "md:w-9/10",
            ]}
        >
            {
                isCurrentLangAr ? 
                    "الزمالة البريطانية لطب الأسنان هي برنامج تدريبي متقدم ومُعتمد يُقدم من قبل الكليات الملكية والجمعيات البريطانية المعنية بطب الأسنان، مثل الكلية الملكية للجراحين في إنجلترا، إدنبرة، أو أيرلندا. تهدف الزمالة إلى تحسين المهارات السريرية والأكاديمية للأطباء ومساعدتهم على تحقيق مستويات عالية من التميز المهني." 
                    : "The British Fellowship in Dentistry is an advanced and accredited training program offered by the Royal Colleges and British dental associations, such as the Royal College of Surgeons in England, Edinburgh, or Ireland. The fellowship aims to enhance clinicians' clinical and academic skills and support them in achieving high levels of professional excellence."
            }
        </p>
    {/snippet}
    <Card 
        {isCurrentLangAr}
        data={{
            img: {
                src: orthodonticsMembershipSVG,
                alt: "Membership in Orthodontics"
            },
            title: {
                en: "What is the British Orthodontics Membership?",
                ar: "ما هي الزمالة البريطانية؟"
            },
            button: {
                text: {
                    en: "Learn more",
                    ar: "تعلم المزيد"
                },
                arrowVisible: true,
            }
        }}
        description={card1Description}
    />




    {#snippet card2Description()}
        <ul 
            class={[
                isCurrentLangAr ? "mr-8" : "ml-2", 
                "w-full", 
                "md:w-9/10",
                "list-disc",
            ]}
        >
            {#if isCurrentLangAr}
                <li>تدريب نظري شامل يغطي مناهج الزمالة البريطانية (6 أشهر أونلاين).</li>
                <li>تدريب عملي مكثف مع العمل على 20 حالة تقويم أسنان على الأقل.</li>
                <li>إشراف استشاريين معتمدين حاصلين على الزمالة البريطانية.</li>
                <li>الإقامة مجانية ومجهزة بالكامل.</li>
                <li>دعم عملي مباشر بمساعدة مرافق أثناء العمل.</li>
            {:else}
                <li>Comprehensive theoretical training covering the British Fellowship curricula (6 months online).</li>
                <li>Intensive practical training, including work on at least 20 orthodontic cases.</li>
                <li>Supervision by accredited consultants who hold the British Fellowship.</li>
                <li>Free and fully equipped accommodation.</li>
                <li>Direct practical support with assistance from onsite staff during work.</li>
            {/if}
        </ul>
    {/snippet}
    <Card 
        {isCurrentLangAr}
        description={card2Description}
        data={{
            flip: true,
            img: {
                src: orthodonticsMembershipSVG,
                alt: "Membership in Orthodontics"
            },
            title: {
                en: "Why Choose Our Program?",
                ar: "لماذا تختار برنامجنا التدريبي؟"
            },
            button: {
                text: {
                    en: "Enroll Now",
                    ar: "سجل الآن"
                },
                link: '/contact-us',
                arrowVisible: true,
            }
        }}
    />

    {#snippet card3Description()}
        <p class={[
            isCurrentLangAr ? "mr-4" : "ml-4", 
            "w-full",
            "md:w-9/10",
            ]}
        >
            {
                isCurrentLangAr ? 
                    "لكي تتأكد ما إذا كان برنامجنا التدريبي لزمالة الأسنان البريطانية مناسب لك، فقد اعددنا اختبار مخصص من 15 سؤال لتحديد مدى تناسبك مع هذا البرنامج." 
                    : "To ensure whether our training program for the British Dental Fellowship is suitable for you, we have prepared a customized 15-question test to determine your compatibility with the program."
            }
        </p>
    {/snippet}
    <Card 
        description={card3Description}
        {isCurrentLangAr}
        data={{
            img: {
                src: orthodonticsMembershipSVG,
                alt: "Membership in Orthodontics"
            },
            title: {
                en: "Is This Program Right For You?",
                ar: "هل هذا البرنامج التدريبي مناسب لك؟"
            },
            button: {
                text: {
                    en: "Take a test",
                    ar: "دخول الإختبار"
                },
                link: '/test',
                type: "action"
            }
        }}
    />
    

    <section class="w-full flex flex-col justify-center items-center gap-8">
        <hr class="w-8/10 max-w-48 border rounded-full border-navy-900">
        {#key isCurrentLangAr}
            <h2 class="text-2xl font-bold" in:fly={{ y: -10, duration: 200 }}>
                {
                    isCurrentLangAr ?
                        "الأسئلة الشائعة" : 
                        "Frequent Questions"
                }
            </h2>
        {/key}
        <div class="w-8/10 max-w-[1000px] flex justify-center items-center gap-4 flex-wrap flex-col md:flex-row">
            <CollapseCard 
                {isCurrentLangAr}
                content={{
                    title: {
                        en: "Lorem ipsum dolor sit amet, consectetur?",
                        ar: "بقبق تلاق يبق تقنق لق فق؟"
                    },
                    text:{
                        en: "meh.",
                        ar: "مه."
                    }
                }}
            />
            <CollapseCard 
                {isCurrentLangAr}
                content={{
                    title: {
                        en: "Lorem ipsum dolor sit amet, consectetur?",
                        ar: "بقبق تلاق يبق تقنق لق فق؟"
                    },
                    text:{
                        en: "meh.",
                        ar: "مه."
                    }
                }}
            />
            <CollapseCard 
                {isCurrentLangAr}
                content={{
                    title: {
                        en: "Lorem ipsum dolor sit amet, consectetur?",
                        ar: "بقبق تلاق يبق تقنق لق فق؟"
                    },
                    text:{
                        en: "meh.",
                        ar: "مه."
                    }
                }}
            />
            <CollapseCard 
                {isCurrentLangAr}
                content={{
                    title: {
                        en: "Lorem ipsum dolor sit amet, consectetur?",
                        ar: "بقبق تلاق يبق تقنق لق فق؟"
                    },
                    text:{
                        en: "meh.",
                        ar: "مه."
                    }
                }}
            />
        </div>

        <hr id="contact-us" class="w-8/10 max-w-48 border rounded-full border-navy-900" />

    </section>

    <section class="w-full min-h-96 flex justify-center">
        <div class="w-9/10 max-w-[1000px] bg-navy-50 drop-shadow-lg h-full flex justify-center items-center flex-col gap-8 rounded-lg p-8">
            {#key isCurrentLangAr}
                <div class="flex flex-col gap-2" in:fly={{ y: -10, duration: 200 }}>
                    <h2 class="text-2xl font-bold text-center">
                        { isCurrentLangAr ? "تواصل معنا" : "Contact Us" }
                    </h2>
                    <p class="text-lg text-center">
                        {
                            isCurrentLangAr ? 
                                "ارسل لنا استفسارك وسنقوم بالرد في خلال 24 ساعة" :
                                "Send us your inquiry and we’ll respond within 24 hours."
                        }
                    </p>
                </div>
            {/key}
            <div class="w-full flex justify-center items-center flex-col md:flex-row" dir={ isCurrentLangAr ? "rtl" : "ltr" }>
                {#key isCurrentLangAr}
                    <div class="w-full md:w-6/10" in:fly={{ x: isCurrentLangAr ? 20 : -20, y: -20, duration: 200 }}>
                        <ContactForm {isCurrentLangAr} />
                    </div>
                {/key}
                
                {#key isCurrentLangAr}
                    <div class="min-w-8 flex items-center justify-center gap-1 font-bold text-navy-800 p-4" in:fly={{ y: -10, duration: 200 }}>
                        <hr class="w-4 border-navy-900 border rounded-md"/>
                        { isCurrentLangAr ? "أو" : "OR" }
                        <hr class="w-4 border-navy-900 border rounded-md"/>
                    </div>
                {/key}

                {#key isCurrentLangAr}
                    <div class="w-full md:w-4/10 md:h-full flex justify-center items-center"  in:fly={{ x: isCurrentLangAr ? -20 : 20, y: -20, duration: 200 }}>
                        <a href="https://wa.me/+201115283512" target="_blank">
                            <button 
                                class="p-4 px-6 w-full  md:max-w-xs min-h-12 cursor-pointer font-bold text-lg rounded-md flex justify-between items-center gap-3 bg-navy-500 hover:bg-navy-600 transition duration-200 text-white text-left text-[clamp(10px,18px,20px)]"
                                class:text-right={ isCurrentLangAr }
                                dir={ isCurrentLangAr ? "rtl" : "ltr" }
                            >
                                {
                                    isCurrentLangAr ? 
                                        "تواصل معنا عبر واتساب" : 
                                        "Contact us via Whatsapp"
                                }
    
                                <svg class="shrink-0" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                                    <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </a>
                    </div>
                {/key}
            </div>
        </div>
    </section>
</main>



<style>

</style>