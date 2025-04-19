<script lang="ts">
    import { goto } from "$app/navigation";
    import { fade, fly } from "svelte/transition";
    import { langPreference } from "./stores.svelte";
    import orthodonticsMembershipSVG from "$lib/assets/orthodontics-membership.svg"
    import Card from "./Card.svelte";
    import CollapseCard from "./CollapseCard.svelte";
    import ContactForm from "./ContactForm.svelte";
    import FrequentQuestionsSection from "./FrequentQuestionsSection.svelte";
    import Button from "./Button.svelte";
    import { page } from "$app/state";
  import CheckCircle from "./CheckCircle.svelte";
  import TextMark from "./TextMark.svelte";
  import HeadNumber from "./HeadNumber.svelte";
  import { text } from "@sveltejs/kit";
    let isCurrentLangAr = $derived(langPreference.lang == 'ar')


    let loading = $state(false)
    let loadingSuccess = $state(false)
    let loadingError = $state(false)

    $effect(() => {
        if(page.form?.success === true) {
            loadingSuccess = true
        } else if(page.form?.success === false) {
            loadingError = true
        }
    })
</script>

{#if loading}   
    <div class="fixed left-0 top-0 w-full h-full bg-[#00000080] z-20" transition:fade={{ duration: 200 }}></div>
    <div class="fixed left-0 top-0 w-full h-full flex justify-center items-center z-30" in:fly={{ y: 20, duration: 200 }} out:fly={{ y: 20, duration: 200 }}>
        <div class="h-9/10 w-9/10 max-h-80 max-w-96 rounded-lg bg-navy-50 flex flex-col justify-center items-center p-3">
            
            <div class="relative w-full h-full flex flex-col justify-center items-center gap-2">

                {#if loadingSuccess}
                    <svg width="140" height="140" viewBox="0 0 189 191" fill="none" xmlns="http://www.w3.org/2000/svg" in:fly={{ y: -10, duration: 300 }}>
                        <path d="M94.5 188.5C145.336 188.5 186.5 146.836 186.5 95.5C186.5 44.1638 145.336 2.5 94.5 2.5C43.6637 2.5 2.5 44.1638 2.5 95.5C2.5 146.836 43.6637 188.5 94.5 188.5Z" stroke="#20BF55" stroke-width="5"/>
                        <path d="M49 97.8571L77.5441 126.3C77.9331 126.687 78.562 126.689 78.9527 126.303L141 65" stroke="#20BF55" stroke-width="9" stroke-linecap="round"/>
                    </svg>
                    <p class="text-2xl" in:fly={{ y: -10, duration: 300 }}>
                        { isCurrentLangAr ? "تم الإرسال!" : "Sent!" }
                    </p>
                {:else if loadingError}
                    <svg width="140" height="140" viewBox="0 0 189 191" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M94.5 188.5C145.336 188.5 186.5 146.836 186.5 95.5C186.5 44.1638 145.336 2.5 94.5 2.5C43.6637 2.5 2.5 44.1638 2.5 95.5C2.5 146.836 43.6637 188.5 94.5 188.5Z" stroke="#BE2E2E" stroke-width="5"/>
                        <path d="M129 62L61 130" stroke="#BE2E2E" stroke-width="9" stroke-linecap="round"/>
                        <path d="M61 62L129 130" stroke="#BE2E2E" stroke-width="9" stroke-linecap="round"/>
                    </svg>
                    <p class="text-xl text-center w-9/10 " dir={ isCurrentLangAr ? "rtl" : "ltr" } in:fly={{ y: -10, duration: 300 }}>
                        { isCurrentLangAr ? "حدث خطأ! يرجى المحاولة مرة اخرى لاحقا." : "Error! Try Again Later." }
                    </p>
                {:else}
                    <p class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-navy-900">
                        { isCurrentLangAr ? "جار الإرسال..." : "Sending..."}
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="shape-rendering: auto; display: block;" width="225" height="225">
                        <g>
                            <path stroke="none" fill="#1e2357" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"><animateTransform values="0 50 51;360 50 51" keyTimes="0;1" repeatCount="indefinite" dur="1s" type="rotate" attributeName="transform"></animateTransform></path><g></g>
                        </g>
                    </svg>
                {/if}
            </div>
            <div class="w-full flex justify-center items-center h-10">
                {#if loadingError || loadingSuccess } 
                    <button 
                        class="bg-navy-500 hover:bg-navy-600 transition p-3 rounded-md text-white cursor-pointer h-full flex justify-center items-center w-18" 
                        in:fly={{ y: -5, duration: 300 }}
                        onclick={() => { loading = false; loadingSuccess = false; loadingError = false }}
                        >
                        { isCurrentLangAr ? "اغلاق" : "Close" }
                    </button>
                {/if}
            </div>
                
        </div> 
    </div>
{/if}
    
<main class="h-full w-full flex flex-col items-center gap-10">

    <section id="home" class="w-full flex justify-center items-center bg-gradient-to-b from-blue-50 to-white">
        <div class={[
            "max-w-[1400px]", 
            "w-full", 
            "flex",
            "justify-around",
            "items-center",
            "gap-12",
            "flex-col-reverse",
            isCurrentLangAr ? "md:flex-row" : "md:flex-row-reverse",
            "my-32",
            "font-tajawal",
            "px-8"
            ]}>

            <div class="max-w-[400px] w-full md:w-4/10">
                <div class="w-full aspect-square bg-[#eaeaea] shadow-2xl rounded-2xl"></div>
            </div>
            <div class="flex flex-col gap-6" dir="auto">
                <TextMark>2025</TextMark>
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl space-y-4">
                    { isCurrentLangAr ? "الزمالة البريطانية" : "The British Fellowship" }
                    <br>
                    <span class="text-primary">
                        { isCurrentLangAr ? "في تقويم الأسنان" : "In Orthodontics" }
                    </span>
                </h1>
                <p class="text-lg text-gray-600 md:text-xl max-w-md">
                    {
                        isCurrentLangAr ?
                            "برنامج تدريبي متكامل يؤهلك للحصول على الزمالة البريطانية في تقويم الأسنان دون الحاجة للتفرغ الكامل"
                            : "Comprehensive training program equips you with the British Fellowship in Orthodontics without the need to sacrifice your career."
                    }
                    
                </p>
                <div>
                    <a href="#enroll_now">
                        <Button>
                            { isCurrentLangAr ? "سجل الآن" : "Enroll Now" }
                        </Button>

                    </a>
                </div>
                <div class="flex flex-col gap-2">
                    <div class="grid grid-rows-2 grid-cols-2 space-y-2 place-items-baseline">
                        <CheckCircle>
                            { isCurrentLangAr ? "تدريب عملي شامل" : "Comprehensive Training" }
                        </CheckCircle>
                        <CheckCircle>
                            { isCurrentLangAr ? "مرونة في الوقت" : "Flexible Schedule" }
                        </CheckCircle>
                        <CheckCircle>
                            { isCurrentLangAr ? "إشراف متخصص" : "Expert Supervision" }
                        </CheckCircle>
                        <CheckCircle>
                            { isCurrentLangAr ? "شهادة معتمدة" : "Certified Certificate" }
                        </CheckCircle>
                    </div>
                </div>
            </div>

        </div>
    </section>


    <section id="what_we_offer" class="w-full flex flex-col justify-center items-center gap-4 border-y border-gray-300 bg-white py-16 px-8">
        <div class="flex flex-col justify-center items-center max-w-2xl">
            
            <div class="w-full flex justify-center items-center">
                <TextMark>
                    { isCurrentLangAr ? "ماذا نقدم لك" : "What Do We Offer" }
                </TextMark>
            </div>
            <h2 class="mt-2 mb-4 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl font-tajawal leading-14">
                { isCurrentLangAr ? "برنامج تدريبي متكامل" : "Comprehensive Training Program That" }
                <span class="text-primary">
                    { isCurrentLangAr ? "يناسب ظروفك" : "Suits Your Needs" }
                </span>
            </h2>
            <p class="text-lg text-center text-gray-600 font-tajawal">
                {
                    isCurrentLangAr ?
                    "دون أن تضطر إلى ترك عملك بالخارج، نقدم لك تجربة تعليمية فريدة تجمع بين المرونة والجودة العالية"
                    : "Without sacrificing your job, we offer a unique educational experience that combines the best of both worlds."
                }
                
            </p>

        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

            <div class="group flex h-full flex-col p-6 max-w-md w-full shadow-sm rounded-2xl" dir="auto">
                <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open h-7 w-7">
                        <path d="M12 7v14"></path>
                        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                    </svg>
                </div>
                <h3 class="mb-3 text-xl font-bold">
                    { isCurrentLangAr ? "محاضرات نظرية اونلاين" : "Online Theoretical Lectures" }
                </h3>
                <p class="mb-6 text-gray-600">
                    { 
                        isCurrentLangAr ?
                        "محاضرات نظرية اونلاين في تقويم الاسنان تغطي كافة الأساسيات والمفاهيم المتقدمة بطريقة تفاعلية."
                        : "Online theoretical lectures in orthodontics covering all the basics and advanced concepts in an interactive way."
                    }
                </p>
            </div>
            <div class="group flex h-full flex-col p-6 max-w-md w-full shadow-sm rounded-2xl" dir="auto">
                <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-7 w-7">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                </div>
                <h3 class="mb-3 text-xl font-bold">
                    { isCurrentLangAr ? "تدريب عملي شامل" : "Comprehensive Hands-On Training" } 
                </h3>
                <p class="mb-6 text-gray-600">
                    { isCurrentLangAr ? 
                        "تدريب عملي على 20-40 حالة تغطي اغلب الحالات البسيطة والمتقدمة تحت إشراف استشاريين متخصصين."
                        : "Practical training on 20–40 cases, covering most simple and advanced scenarios under the supervision of specialized consultants."
                    }
                </p>
            </div>
            <div class="group flex h-full flex-col p-6 max-w-md w-full shadow-sm rounded-2xl" dir="auto">
                <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar h-7 w-7">
                        <path d="M8 2v4"></path><path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                    </svg>
                </div>
                <h3 class="mb-3 text-xl font-bold">
                    { isCurrentLangAr ? "متابعة دورية" : "Regular Follow-Up" }
                </h3>
                <p class="mb-6 text-gray-600">
                    { 
                        isCurrentLangAr ? 
                            "ستكون المتابعات مرة كل 4-5 اسابيع لضمان التقدم المستمر مع مرونة في تحديد المواعيد."
                            : "Follow-ups will take place every 4–5 weeks to ensure continuous progress, with flexibility in scheduling appointments."
                    }
                </p>
            </div>
            <div class="group flex h-full flex-col p-6 max-w-md w-full shadow-sm rounded-2xl" dir="auto">
                <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-7 w-7">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                    </svg>
                </div>
                <h3 class="mb-3 text-xl font-bold">
                    { isCurrentLangAr ? "تدريب على جميع التقنيات" : "Training on All Techniques" }
                </h3>
                <p class="mb-6 text-gray-600">
                    { 
                        isCurrentLangAr ? 
                            "سيتم تدريبك على التقويم المعدني و ال ceramic وال aligner وأحدث التقنيات في مجال تقويم الأسنان."
                            : "You will be trained on metal braces, ceramic braces, aligners, and the latest techniques in the field of orthodontics."
                    }
                </p>
            </div>
    
            <div class="group flex h-full flex-col p-6 max-w-md w-full shadow-sm rounded-2xl" dir="auto">
                <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open h-7 w-7">
                        <path d="M12 7v14"></path>
                        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                    </svg>
                </div>
                <h3 class="mb-3 text-xl font-bold">
                    { isCurrentLangAr ? "توفير المواد التعليمية" : "Educational Materials Provided" }
                </h3>
                <p class="mb-6 text-gray-600">
                    { 
                        isCurrentLangAr ?
                            "سنوفر لك جميع الكتب والماتيريال والأدوات التي ستحتاجها خلال فترة البرنامج التدريبي."
                            : "We will provide all the books, materials, and tools you’ll need during the training program."
                    }
                </p>
            </div>
    
            <div class="group flex h-full flex-col p-6 max-w-md w-full shadow-sm rounded-2xl" dir="auto">
                <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award h-7 w-7">
                        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                        <circle cx="12" cy="8" r="6"></circle>
                    </svg>
                </div>
                <h3 class="mb-3 text-xl font-bold">
                    { isCurrentLangAr ? "إشراف متخصص" : "Expert Supervision" }
                </h3>
                <p class="mb-6 text-gray-600">
                    { 
                        isCurrentLangAr ? 
                            "كل هذا تحت إشراف استشاريين حاصلين على الزمالة البريطانية في تقويم الأسنان وذوي خبرة طويلة."
                            : "All of this will be under the supervision of consultants with British Fellowship in Orthodontics and extensive experience."
                    }
                </p>
            </div>
        </div>
    </section>


















    
    <section id="training_plan" class="w-full bg-gradient-to-b from-blue-50 to-white py-24 md:py-32 font-tajawal">
        <div class="mx-auto mb-16 max-w-2xl text-center">
            <TextMark>
                { isCurrentLangAr ? "خطة التدريب" : "Training Plan" }
            </TextMark>
            <h2 class="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                { isCurrentLangAr ? "رحلتك نحو" : "Your Journey towards" }
                <span class="text-primary">
                    { isCurrentLangAr ? "الزمالة البريطانية" : "The British Fellowship" }
                </span>
            </h2>
            <p class="text-lg text-gray-600">
                {
                    isCurrentLangAr ?
                        "خطوات واضحة ومدروسة تضمن لك الوصول إلى هدفك بكفاءة وفعالية"
                        : "Clear and well-structured steps that lead you towards your goal with efficiency and effectiveness"
                }
                
            </p>
        </div>
        <div class="relative mx-auto max-w-4xl px-4">
            <!-- Timeline Line -->
            <div class="absolute left-4 top-0 h-full w-0.5 bg-primary/20 md:left-1/2 md:-ml-0.5"></div>

            <!-- Timeline Items -->
            <div class="space-y-8">

                <!-- Step 1 -->
                <div class="relative md:flex md:items-center md:justify-between" dir="auto">
                    <div class="mb-10 flex md:mb-0 md:w-1/2 md:justify-end">
                        <div class="max-w-md rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl md:text-right mr-1">
                            <HeadNumber>1</HeadNumber>
                            <h3 class="mb-3 text-xl font-bold text-left" class:text-right={ isCurrentLangAr }>
                                { isCurrentLangAr ? "الفصل الدراسي الأول: الأساسيات النظرية" : "First Semester: Theoretical Basics" }
                            </h3>
                            <p class="text-gray-600 text-left" class:text-right={ isCurrentLangAr }>
                                {
                                    isCurrentLangAr ? 
                                        "نبدأ معك من الصفر، بمحاضرات نظرية أونلاين في تقويم الأسنان تغطي كل الأساسيات، وتستمر لمدة 6 أشهر بطريقة تفاعلية ومنظمة، حتى تمتلك قاعدة علمية قوية."
                                        : "We start with you from scratch, through online theoretical lectures in orthodontics covering all the fundamentals. This phase lasts for 6 months in an interactive and organized way, ensuring you build a strong scientific foundation."
                                }
                            </p>
                        </div>
                    </div>
                    <div class="md:w-1/2"></div>
                </div>

                 <!-- Step 2 -->
                <div class="relative md:flex md:items-center md:justify-between" dir="auto">
                    <div class="mb-10 md:mb-0 md:w-1/2"></div>

                    <div class="md:w-1/2">
                        <div class="max-w-md rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl mr-1">
                            <HeadNumber>2</HeadNumber>
                            <h3 class="mb-3 text-xl font-bold">
                                { isCurrentLangAr ? "الفصل الدراسي الثاني: التدريب العملي" : "Second Semester: Hands-On Training & MFDS Part 1 Prep" }
                            </h3>
                            <p class="text-gray-600">
                                {
                                    isCurrentLangAr ?
                                        "بعد اجتياز اختبار التقييم، تنتقل للمرحلة العملية حيث تبدأ في استلام حالاتك تحت إشراف مباشر. يتم مناقشة خطة العلاج بالتفصيل لكل حالة مع الاستشاري في سيمنارات أونلاين تفاعلية، ثم تبدأ في تنفيذ الخطة العلاجية بنفسك، خطوة بخطوة."
                                        : "After passing the assessment exam, you move on to the practical phase, where you begin handling your own clinical cases under direct supervision. Each case's treatment plan is discussed in detail with a consultant through interactive online seminars, and then you start implementing the treatment step-by-step yourself."
                                }
                            </p>
                            <p class="text-gray-600">
                                {
                                    isCurrentLangAr ?
                                        "ثم تبدأ رحلة الاستعداد لاختبار MFDS Part 1 من الكلية الملكية – من خلال محاضرات أسبوعية مباشرة أونلاين، تساعدك على فهم نمط الأسئلة والاستعداد الكامل للاختبار."
                                        : "After that, you begin your preparation journey for the MFDS Part 1 exam by the Royal College through live weekly online lectures designed to help you understand the question patterns and be fully prepared for the exam."
                                }
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Step 3 -->
                <div class="relative md:flex md:items-center md:justify-between" dir="auto">
                    <div class="mb-10 flex md:mb-0 md:w-1/2 md:justify-end">
                        <div class="max-w-md rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl md:text-right mr-1">
                            <HeadNumber>3</HeadNumber>
                            <h3 class="mb-3 text-xl font-bold text-left" class:text-right={ isCurrentLangAr }>
                                { isCurrentLangAr ? " الفصل الدراسي الثالث: العمل السريري المتقدم والتركيز على اختبار MFDS الجزء الثاني" : "Third Semester: Advanced Clinical Work & MFDS Part 2 Focus" }
                            </h3>
                            <p class="text-gray-600 text-left" class:text-right={ isCurrentLangAr }>
                                {
                                    isCurrentLangAr ?
                                        "في السنه الثانية تنتقل إلى التدريب المكثف على MFDS Part 2 مع استمرار استلام حالات التقويم ومناقشتها في السيمينارات."
                                        : "In the second year, the focus shifts to intensive training for MFDS Part 2, while you continue receiving and discussing orthodontic cases during the ongoing seminars."
                                }
                            </p>
                        </div>
                    </div>
                    <div class="md:w-1/2"></div>
                </div>

                <!-- Step 4 -->
                <div class="relative md:flex md:items-center md:justify-between" dir="auto">
                    <div class="mb-10 md:mb-0 md:w-1/2"></div>

                    <div class="md:w-1/2">
                        <div class="max-w-md rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl mr-1">
                            <HeadNumber>4</HeadNumber>
                            <h3 class="mb-3 text-xl font-bold">
                                { isCurrentLangAr ? " الفصل الدراسي الرابع: الاستعداد المنهجي لاختبار Forth الجزء A" : "Fourth Semester: Structured Preparation for Part A of the Forth Exam" }
                            </h3>
                            <p class="text-gray-600">
                                {
                                    isCurrentLangAr ? 
                                        "ثم نبدأ في الاستعداد لاختبار Forth part A\nوفيه يتم شرح كامل المواضيع المشمولة في الاختبار مع التدريب على بنك اسئلة من الاختبارات السابقه وتهيئتك لتكون على استعداد تام للاختبار."
                                        : "Here, we begin preparation for Forth Part A of the exam. All exam-related topics are thoroughly explained, and you receive focused training using question banks from previous exams to ensure you’re fully ready to take the test."
                                }
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Step 5 -->
                <div class="relative md:flex md:items-center md:justify-between" dir="auto">
                    <div class="mb-10 flex md:mb-0 md:w-1/2 md:justify-end">
                        <div class="max-w-md rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl md:text-right mr-1">
                            <HeadNumber>5</HeadNumber>
                            <h3 class="mb-3 text-xl font-bold text-left" class:text-right={ isCurrentLangAr }>
                                { isCurrentLangAr ? " الفصل الدراسي الخامس: التدريب العملي لاختبار Forth الجزء B" : "Fifth Semester: Practical Training for Forth Part B" }
                            </h3>
                            <p class="text-gray-600 text-left" class:text-right={ isCurrentLangAr }>
                                {
                                    isCurrentLangAr ?
                                        "هنا نبدأ في التدريب العملي على جميع اجزاء اختبار Forth part B\nوفيه يتم مراجعة المواضيع ذات العلاقة بهذا الاختبار والتدريب المكثف على جميع أجزاء الاختبار وهي ال diagnosis و ال mechanics و ال communication وتهيئتك لتكون على استعداد تام لاجتياز الاختبار."
                                        : "This phase is all about hands-on preparation for Forth Part B. You'll review all topics related to the exam and go through intensive training on all its components: Diagnosis, Mechanics, and Communication. Our goal is to ensure you are completely equipped to pass the exam with confidence."
                                }
                            </p>
                        </div>
                    </div>
                    <div class="md:w-1/2"></div>
                </div>

                <div class="relative md:flex md:items-center md:justify-between" dir="auto">
                    <div class="mb-10 md:mb-0 md:w-1/2"></div>
    
                    <div class="md:w-1/2">
                        <div class="max-w-md rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl mr-1">
                            <HeadNumber>6</HeadNumber>
                            <h3 class="mb-3 text-xl font-bold">
                                { isCurrentLangAr ? "  الفصل الدراسي السادس: إنهاء التدريب والحصول على شهادة الزمالة" : "Sixth Semester: Finalization & Fellowship Certification" }
                            </h3>
                            <p class="text-gray-600">
                                {
                                    isCurrentLangAr ? 
                                        "وفي هذا الجزء تستكمل التدريبات وتبدأ في إنهاء حالات التقويم وبنهايته تستلم شهادة من المركز باتمامك التدريب لتقديمها للكلية الملكية لتحصل على شهادة الزمالة البريطانية لتقويم الأسنان."
                                        : "In this final stage, you continue your clinical training and begin completing your orthodontic cases. By the end of the semester, you’ll receive a certificate from the center confirming the completion of your training—ready to submit to the Royal College in pursuit of your British Orthodontic Fellowship certification."
                                }
                            </p>
                        </div>
                    </div>
                  </div>
            </div>
          </div>
    </section>















    <section id="frequent_questions" class="w-full flex flex-col justify-center items-center gap-8">

        <div class="mx-auto mb-16 max-w-2xl text-center p-4 gap-4">
            <TextMark>
                { isCurrentLangAr ? "الاسئلة الشائعة" : "Frequent Questions" }
            </TextMark>
            <h2 class="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl leading-14">
                { isCurrentLangAr ? "كل ما تريد معرفته" : "Everything you need to know" }
                <span class="text-primary">
                    { isCurrentLangAr ? "عن البرنامج" : "About the Program" }
                </span>
            </h2>
            <p class="text-lg text-gray-600">
                {
                    isCurrentLangAr ? 
                        "إجابات على الأسئلة الأكثر شيوعاً حول برنامج الزمالة البريطانية في تقويم الأسنان"
                        : "Answers to the most common questions about the British Fellowship Program"
                }
            </p>
        </div>
        
        <FrequentQuestionsSection {isCurrentLangAr} />

        <hr id="contact-us" class="w-8/10 max-w-48 border rounded-full border-navy-900" />

    </section>

    
    <section id="enroll_now" class="relative w-full mx-auto max-w-5xl flex flex-col justify-center items-center font-tajawal" dir="auto">
        <div class="flex justify-center items-center font-bold text-2xl w-38 h-14 bg-gradient-to-b from-white to-blue-100 text-primary absolute -top-4 left-1/2 -translate-x-1/2 rounded-full shadow-md">
            { isCurrentLangAr ? "سجل الآن" : "Enroll Now"}
        </div>
        <div class="w-9/10 mt-3 flex flex-col justify-center p-8 md:p-12 rounded-3xl bg-primary overflow-hidden">
            <h2 class="mb-4 mt-6 md:mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                { isCurrentLangAr ? "ابدأ رحلتك نحو الزمالة البريطانية اليوم" : "Start Your Journey to the British Fellowship Today" }
            </h2>
            <p class="mb-8 text-lg text-white/80">
                {
                    isCurrentLangAr ? 
                        "سجل الآن واحصل على استشارة مجانية لمناقشة تفاصيل البرنامج"
                        : "Enroll Now and Get a Free Consultation to Discuss Program Details"
                }
            </p>
            <div class="flex flex-col gap-4 sm:flex-row">
                <a href="https://wa.me/+201115283512" target="_blank">
                    <button 
                        class="p-4 px-6 w-full md:max-w-xs min-h-8 cursor-pointer font-bold text-lg rounded-full flex justify-between items-center gap-3 
                            bg-[#e5f0f5] hover:bg-[#0382c6] shadow-md transition duration-200 text-primary hover:text-white text-left text-[clamp(10px,18px,20px)]"
                        class:text-right={ isCurrentLangAr }
                        dir="auto"
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
        </div>
    </section>
<!-- 
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
                        <ContactForm {isCurrentLangAr} bind:loading {loadingSuccess} {loadingError} />
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
    </section> -->
</main>



<style>

</style>