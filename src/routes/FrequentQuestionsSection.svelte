<script lang="ts">

    import CollapseCard from "./CollapseCard.svelte";
    
    let { isCurrentLangAr }: { isCurrentLangAr: boolean } = $props()
    
    let cardContainerMaxHeight = $state(420)
    let cardContainerHeight: number = $state(0)
    let cardContainer: HTMLElement | undefined = $state()
    let numberOfCards = $state(0)
    let isCardsListOpen = $state(false)
    $effect(() => {
        if(cardContainer) {
            numberOfCards = cardContainer.children.length
        }
    })
</script>
<div 
    class={["relative w-8/10 max-w-[1000px] transition-all duration-300 overflow-visible"]}
    style="max-height: {isCardsListOpen ? cardContainerHeight : cardContainerMaxHeight }px"
>
    <div 
        class={[
            "w-full",
            "flex",
            "justify-center",
            "items-center",
            "gap-4",
            "flex-wrap",
            "flex-col",
            "md:flex-row",
            "transition-all",
            "duration-75",
            isCardsListOpen ? "pb-14" : "pb-0"
        ]} 
        bind:offsetHeight={cardContainerHeight} 
        bind:this={cardContainer}
    >
        <CollapseCard {isCurrentLangAr} >
            {#snippet title()}
                <span>
                    {
                        isCurrentLangAr ?
                            "ما هي مراحل البرنامج التدريبي؟" : 
                            "What are the stages of the training program?"
                    }
                </span>
            {/snippet}
            {#snippet content()}
                <p class="font-bold">
                    {
                        isCurrentLangAr ?
                            "يتكون البرنامج من ثلاث مراحل رئيسية:"
                            : "The program consists of three main stages:"
                    }
                </p>
                <ul class={[
                        "list-disc",
                        isCurrentLangAr ? "mr-5" : "ml-5",
                    ]}
                >
                    <li class="mt-2">
                        <span class="font-bold"> { isCurrentLangAr ? "الجزء النظري:" : "Theoretical Part:" } </span>
                            { 
                                isCurrentLangAr ? 
                                    "محاضرات أونلاين أسبوعية تغطي كل مناهج التقويم وفق معايير الكلية الملكية."
                                    : "Weekly online lectures covering all orthodontic curriculum based on the Royal College standards."
                            }
                        </li>
                    <li>
                        <span class="font-bold"> { isCurrentLangAr ? "الجزء العملي:" : "Practical Part:" } </span>
                            {
                                isCurrentLangAr ?
                                    "تدريب عملي على عدد واسع من حالات التقويم، يتم استلامها بالتدريج تحت إشراف نخبة من الاستشاريين."
                                    : "Hands-on training on a wide range of orthodontic cases, gradually assigned under the supervision of a select group of consultants."
                            }
                        </li>
                    <li>
                        <span class="font-bold"> { isCurrentLangAr ? "التحضير للامتحانات:" : "Exam Preparation:" } </span>
                        {
                            isCurrentLangAr ?
                                "تدريب مكثف لاجتياز اختبارات الزمالة البريطانية بأعلى نسبة نجاح."
                                : "Intensive training to successfully pass the British Fellowship exams with the highest success rate."
                        }
                    </li>
                </ul>
            {/snippet}
        </CollapseCard>
        
        <CollapseCard {isCurrentLangAr} >
            {#snippet title()}
                <span>
                    {
                        isCurrentLangAr ?
                            "كيف يتم التدريب العملي؟" : 
                            "How is the practical training conducted?"
                    }
                </span>
            {/snippet}
            {#snippet content()}
                {#if isCurrentLangAr}
                    <ul class={[
                            "list-disc",
                            isCurrentLangAr ? "mr-5" : "ml-5",
                        ]}
                    >
                        <li>يتم استلام حالات التقويم على مراحل وفقًا لمستوى الطبيب.</li>
                        <li>الحضور يكون في ورش عمل عملية أسبوعية، وبعدها يتم متابعة الحالات كل 4-5 أسابيع في العيادات.</li>
                        <li>يتم توفير جميع المواد والأدوات اللازمة للتدريب من قبل الأكاديمية.</li>
                    </ul>
                {:else}
                    <ul class={[
                            "list-disc",
                            isCurrentLangAr ? "mr-5" : "ml-5",
                        ]}
                    >
                        <li>You will receive your orthodontic cases gradually, according to your skill level.</li>
                        <li>Attendance is required at weekly hands-on workshops, followed by follow-up sessions every 4–5 weeks in the clinics to monitor case progress.</li>
                        <li>All necessary materials and tools for the training are provided by the academy.</li>
                    </ul>
                {/if}
            {/snippet}
        </CollapseCard>
        <CollapseCard {isCurrentLangAr} >
            {#snippet title()}
                <span>
                    {
                        isCurrentLangAr ?
                            "هل هناك اختبار قبل بدء التدريب العملي؟" : 
                            "Is there an exam before starting the practical training?"
                    }
                </span>
            {/snippet}
            {#snippet content()}
                {#if isCurrentLangAr}
                    <p>نعم، بعد إنهاء الجزء النظري وورش العمل الأولية، يتم إجراء امتحان Pre-clinic لتقييم الاستعداد لاستلام الحالات. وفي حال عدم اجتيازه، يُعاد الامتحان مجانًا دون أي تكاليف إضافية.</p>
                {:else}
                    <p>Yes, after completing the theoretical part and the initial workshops, a Pre-clinic exam is conducted to assess readiness to begin working on cases. If the exam is not passed, it can be retaken free of charge with no additional fees.</p>
                {/if}
            {/snippet}
        </CollapseCard>
        <CollapseCard {isCurrentLangAr} >
            {#snippet title()}
                <span>
                    {
                        isCurrentLangAr ?
                            "ما هي متطلبات التقديم؟" : 
                            "What are the application requirements?"
                    }
                </span>
            {/snippet}
            {#snippet content()}
                {#if isCurrentLangAr}
                    <p class="font-bold">للتسجيل في البرنامج، تحتاج إلى تقديم:</p>
                    <ul class={[
                            "list-disc",
                            isCurrentLangAr ? "mr-5" : "ml-5",
                        ]}
                    >
                        <li>شهادة التخرج مع الترجمة إلى الإنجليزية.</li>
                        <li>صورة من جواز السفر وصورة شخصية.</li>
                        <li>اجتياز مقابلة القبول (Interview) لتحديد مدى ملاءمتك للبرنامج.</li>
                    </ul>
                {:else}
                    <p class="font-bold">To enroll in the program, you need to submit:</p>
                    <ul class={[
                            "list-disc",
                            isCurrentLangAr ? "mr-5" : "ml-5",
                        ]}
                    >
                        <li>Graduation certificate with English translation.</li>
                        <li>A copy of your passport and a personal photo.</li>
                        <li>Successful completion of an admission interview to assess your suitability for the program.</li>
                    </ul>
                {/if}
            {/snippet}
        </CollapseCard>
        <CollapseCard {isCurrentLangAr} >
            {#snippet title()}
                <span>
                    {
                        isCurrentLangAr ?
                            "متى يمكنني دخول امتحانات الزمالة البريطانية؟" : 
                            "When can I take the British Fellowship exams?"
                    }
                </span>
            {/snippet}
            {#snippet content()}
                {#if isCurrentLangAr}
                    <ul class={[
                            "list-disc",
                            isCurrentLangAr ? "mr-5" : "ml-5",
                        ]}
                    >
                        <li>يمكن التقديم لامتحان Part A بعد سنتين من بدء البرنامج.</li>
                        <li>يمكن التقديم لامتحان Part B بعد سنتين ونصف أو أكثر، حسب جاهزيتك واستكمال الحالات العملية.</li>
                    </ul>
                {:else}
                    <ul class={[
                            "list-disc",
                            isCurrentLangAr ? "mr-5" : "ml-5",
                        ]}
                    >
                        <li>You can apply for Part A of the exam after two years from the start of the program.</li>
                        <li>You can apply for Part B after two and a half years or more, depending on your readiness and completion of the required clinical cases.</li>
                    </ul>
                {/if}
            {/snippet}
        </CollapseCard>
        {#if isCardsListOpen}
        <CollapseCard {isCurrentLangAr} >
            {#snippet title()}
                <span>
                    {
                        isCurrentLangAr ?
                            "كيف يتم حضور المحاضرات؟" : 
                            "What are the stages of the training program?"
                    }
                </span>
            {/snippet}
            {#snippet content()}
                {#if isCurrentLangAr}
                    <p>جميع المحاضرات النظرية تُعقد أونلاين عبر تطبيق Zoom.</p>
                    <ul class={[
                            "mt-2",
                            isCurrentLangAr ? "mr-5" : "ml-5",
                        ]}
                    >
                        <li>&gt; يمكنك التفاعل مع المحاضرين بالصوت والصورة أثناء المحاضرات.</li>
                        <li>&gt; مدة الجزء النظري 5-7 أشهر، يتبعها التدريب العملي وورش العمل.</li>
                    </ul>
                {:else}
                    <p>All theoretical lectures are conducted online via Zoom.</p>
                    <ul class={[
                            "mt-2",
                            isCurrentLangAr ? "mr-5" : "ml-5",
                        ]}
                    >
                        <li>&gt; You can interact with the instructors using both audio and video during the sessions.</li>
                        <li>&gt; The theoretical part lasts 5 to 7 months, followed by the practical training and workshops.</li>
                    </ul>
                {/if}
            {/snippet}
        </CollapseCard>
        <CollapseCard {isCurrentLangAr} >
            {#snippet title()}
                <span>
                    {
                        isCurrentLangAr ?
                            "هل يمكنني دراسة امتحان MFDS / MFD مع هذا البرنامج؟" : 
                            "What are the stages of the training program?"
                    }
                </span>
            {/snippet}
            {#snippet content()}
                {#if isCurrentLangAr}
                    <p>نعم، يتم تدريس MFDS & MFD خلال نفس مدة البرنامج (3 سنوات)، ويُجرى امتحانها خلال السنة الأولى.</p>
                {:else}
                    <p>Yes, the MFDS & MFD are taught within the same 3-year duration of the program, and their exams are typically taken during the first year.</p>                
                {/if}
            {/snippet}
        </CollapseCard>
        <CollapseCard {isCurrentLangAr} >
            {#snippet title()}
                <span>
                    {
                        isCurrentLangAr ?
                            "ما هي طبيعة امتحان الزمالة البريطانية؟" : 
                            "What is the structure of the British Fellowship exam?"
                    }
                </span>
            {/snippet}
            {#snippet content()}
                {#if isCurrentLangAr}
                    <p class="font-bold">امتحان Part A:</p>
                    <ul class={[
                            "mt-2",
                            "list-disc",
                            isCurrentLangAr ? "mr-5" : "ml-5",
                        ]}
                    >
                        <li>180 سؤالًا مقسمة إلى جزأين، كل جزء 90 سؤالًا خلال ساعتين.</li>
                        <li>النجاح يتطلب نسبة 60%.</li>
                        <li>التكلفة 250 جنيهًا إسترلينيًا.</li>
                    </ul>
                    <p class="font-bold">امتحان Part B:</p>
                    <ul class={[
                            "mt-2", 
                            "list-disc",
                            isCurrentLangAr ? "mr-5" : "ml-5",
                        ]}
                    >
                        <li>3 محطات اختبار تشمل التشخيص، التخطيط العلاجي، والتواصل مع المرضى.</li>
                        <li>تكلفة الامتحان 1500 جنيه إسترليني.</li>
                    </ul>
                {:else}
                    <p class="font-bold">Part A:</p>
                    <ul class={[
                            "mt-2",
                            "list-disc",
                            isCurrentLangAr ? "mr-5" : "ml-5",
                        ]}
                    >
                        <li>180 questions divided into two sections, with 90 questions in each, lasting 2 hours per section.</li>
                        <li>A 60% passing score is required.</li>
                        <li>Exam fee: £250.</li>
                    </ul>
                    <p class="font-bold">Part B:</p>
                    <ul class={[
                            "mt-2", 
                            "list-disc",
                            isCurrentLangAr ? "mr-5" : "ml-5",
                        ]}
                    >
                        <li>Includes 3 clinical stations covering diagnosis, treatment planning, and patient communication.</li>
                        <li>Exam fee: £1,500.</li>
                    </ul>
                {/if}
            {/snippet}
        </CollapseCard>
    
        <CollapseCard {isCurrentLangAr} >
            {#snippet title()}
                <span>
                    {
                        isCurrentLangAr ?
                            "كيف يمكنني تنظيم وقتي بين العمل في الخليج والدراسة في مصر؟" : 
                            "How can I manage my time between working outside and studying in Egypt?"
                    }
                </span>
            {/snippet}
            {#snippet content()}
                {#if isCurrentLangAr}
                    <p>تم تصميم البرنامج خصيصًا ليلائم أطباء الأسنان العاملين في الخليج.</p>
                    <p>السفر إلى مصر كل 4-5 أسابيع لمدة قصيرة لمتابعة الحالات دون التأثير على عملك.</p>
                    <p>المحاضرات النظرية أونلاين بالكامل، مما يوفر عليك الوقت والتكاليف.</p>
                {:else}
                    <p>The program is specifically designed to suit dentists working outside of Egypt.</p>
                    <p>You'll only need to travel to Egypt every 4–5 weeks for a short period to follow up on clinical cases, minimizing any disruption to your job.</p>
                    <p>All theoretical lectures are fully online, saving you both time and travel costs.</p>
                {/if}
            {/snippet}
        </CollapseCard>
    
        <CollapseCard {isCurrentLangAr} >
            {#snippet title()}
                <span>
                    {
                        isCurrentLangAr ?
                            "ماذا لو فاتتني إحدى الرحلات لمتابعة الحالات؟" : 
                            "What if I miss one of the follow-ups for case management?"
                    }
                </span>
            {/snippet}
            {#snippet content()}
                {#if isCurrentLangAr}
                    <p>يمكن تعويض أي جلسة متابعة وفق جدول مرن يتناسب مع مواعيد الأطباء.</p>
                    <p>يتم توفير دعم مستمر لضمان استكمال جميع متطلبات التدريب.</p>
                {:else}
                    <p>Any missed follow-up session can be rescheduled flexibly to fit your availability.</p>
                    <p>Continuous support is provided to ensure you complete all training requirements without setbacks.</p>
                {/if}
            {/snippet}
        </CollapseCard>
    
        <CollapseCard {isCurrentLangAr} >
            {#snippet title()}
                <span>
                    {
                        isCurrentLangAr ?
                            "هل يمكنني العمل في أي دولة بعد الحصول على الزمالة؟" : 
                            "Can I work in any country after obtaining the Fellowship?"
                    }
                </span>
            {/snippet}
            {#snippet content()}
                {#if isCurrentLangAr}
                    <p>نعم! شهادة الزمالة البريطانية معترف بها في الخليج وأوروبا وكندا، مما يفتح لك فرصًا مهنية دولية.</p>
                    <p>تتيح لك الشهادة الحصول على درجة أخصائي تقويم الأسنان مباشرة بعد التخرج.</p>
                {:else}
                    <p>Yes! The British Fellowship certificate is recognized in the Gulf, Europe, and Canada, opening up international career opportunities.</p>
                    <p>The certificate allows you to qualify for the position of Orthodontic Specialist immediately upon graduation.</p>
                {/if}
            {/snippet}
        </CollapseCard>
    
        <CollapseCard {isCurrentLangAr} >
            {#snippet title()}
                <span>
                    {
                        isCurrentLangAr ?
                            "هل هناك إمكانية لاسترداد الرسوم في حال قررت عدم الاستمرار؟" : 
                            "Is there an option for a refund if I decide not to continue?"
                    }
                </span>
            {/snippet}
            {#snippet content()}
                {#if isCurrentLangAr}
                    <p>في حالة الانسحاب قبل بدء البرنامج، يتم استرداد رسوم التسجيل.</p>
                    <p>بعد بدء البرنامج، يمكن مناقشة الحالات الخاصة وفقًا للسياسة المالية.</p>
                {:else}
                    <p>If you withdraw before the program begins, the registration fee will be refunded.</p>
                    <p>After the program has started, special cases can be discussed according to the financial policy.</p>
                {/if}
            {/snippet}
        </CollapseCard>
    
        <CollapseCard {isCurrentLangAr} >
            {#snippet title()}
                <span>
                    {
                        isCurrentLangAr ?
                            "هل يوفر البرنامج سكنًا أو تسهيلات إقامة أثناء فترات التدريب العملي؟" : 
                            "Does the program provide accommodation or facilities during the practical training periods?"
                    }
                </span>
            {/snippet}
            {#snippet content()}
                {#if isCurrentLangAr}
                    <p>نعم، يتم تقديم توصيات للإقامة بأسعار مناسبة بالقرب من مقر التدريب.</p>
                {:else}
                    <p>Yes, recommendations for affordable accommodation are provided near the training location.</p>
                {/if}
            {/snippet}
        </CollapseCard>
    
        <CollapseCard {isCurrentLangAr} >
            {#snippet title()}
                <span>
                    {
                        isCurrentLangAr ?
                            "هل هناك متابعة بعد إنهاء البرنامج؟" : 
                            "Is there follow-up after completing the program?"
                    }
                </span>
            {/snippet}
            {#snippet content()}
                {#if isCurrentLangAr}
                    <p>نعم، يستمر الدعم المهني والتواصل مع الخريجين لمساعدتهم في مسيرتهم المهنية.</p>
                    <p>يمكن للخريجين حضور ورش عمل متقدمة مستقبلاً.</p>
                {:else}
                    <p>Yes, professional support and ongoing communication with graduates continue to assist them in their career progression.</p>
                    <p>Graduates also have the opportunity to attend advanced workshops in the future.</p>
                {/if}
            {/snippet}
        </CollapseCard>
        {/if}
    </div>
    <div class="w-full h-12 bg-linear-0 from-white via-white to-white/0 flex justify-center items-center absolute bottom-0">
        <button
            class="text-[#0000EE] hover:text-[#FF0000] cursor-pointer p-2 transition duration-100"
            onclick={() => {
                if(isCardsListOpen) isCardsListOpen = false
                    else isCardsListOpen = true
            }}
        >
            { 
                isCardsListOpen ?
                    isCurrentLangAr ? "إظهار أقل" : "Show less"
                    : isCurrentLangAr ? "إظهار المزيد" : "Show more" 
            }
        </button>
    </div>
</div>