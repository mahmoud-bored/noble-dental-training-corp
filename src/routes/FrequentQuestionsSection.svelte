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
    class="relative w-8/10 max-w-[1000px] overflow-hidden transition-all duration-300"
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
                <p class="font-bold">يتكون البرنامج من ثلاث مراحل رئيسية:</p>
                <ul class={[
                        "list-disc",
                        isCurrentLangAr ? "mr-5" : "ml-5",
                    ]}
                >
                    <li class="mt-2"><span class="font-bold">الجزء النظري: </span> محاضرات أونلاين أسبوعية تغطي كل مناهج التقويم وفق معايير الكلية الملكية.</li>
                    <li><span class="font-bold">الجزء العملي: </span> تدريب عملي على 40 حالة تقويم، يتم استلامها بالتدريج تحت إشراف نخبة من الاستشاريين.</li>
                    <li><span class="font-bold">التحضير للامتحانات: </span> تدريب مكثف لاجتياز اختبارات الزمالة البريطانية بأعلى نسبة نجاح.</li>
                </ul>
            {/snippet}
        </CollapseCard>
        
        <CollapseCard {isCurrentLangAr} >
            {#snippet title()}
                <span>
                    {
                        isCurrentLangAr ?
                            "كيف يتم التدريب العملي؟" : 
                            "What are the stages of the training program?"
                    }
                </span>
            {/snippet}
            {#snippet content()}
                <ul class={[
                        "list-disc",
                        isCurrentLangAr ? "mr-5" : "ml-5",
                    ]}
                >
                    <li>يتم استلام 40 حالة تقويمية حقيقية على مراحل وفقًا لمستوى الطبيب.</li>
                    <li>الحضور يكون في ورش عمل عملية أسبوعية، وبعدها يتم متابعة الحالات كل 4-5 أسابيع في العيادات.</li>
                    <li>يتم توفير جميع المواد والأدوات اللازمة للتدريب من قبل الأكاديمية.</li>
                </ul>
            {/snippet}
        </CollapseCard>
        <CollapseCard {isCurrentLangAr} >
            {#snippet title()}
                <span>
                    {
                        isCurrentLangAr ?
                            "هل هناك اختبار قبل بدء التدريب العملي؟" : 
                            "What are the stages of the training program?"
                    }
                </span>
            {/snippet}
            {#snippet content()}
                <p>نعم، بعد إنهاء الجزء النظري وورش العمل الأولية، يتم إجراء امتحان Pre-clinic لتقييم الاستعداد لاستلام الحالات. وفي حال عدم اجتيازه، يُعاد الامتحان مجانًا دون أي تكاليف إضافية.</p>
            {/snippet}
        </CollapseCard>
        <CollapseCard {isCurrentLangAr} >
            {#snippet title()}
                <span>
                    {
                        isCurrentLangAr ?
                            "ما هي متطلبات التقديم؟" : 
                            "What are the stages of the training program?"
                    }
                </span>
            {/snippet}
            {#snippet content()}
                <p class="font-bold">للتسجيل في البرنامج، تحتاج إلى تقديم:</p>
                <ul class={[
                        "list-disc",
                        isCurrentLangAr ? "mr-5" : "ml-5",
                    ]}
                >
                    <li>شهادة التخرج وامتياز مع ترجمة إنجليزية.</li>
                    <li>صورة من جواز السفر وصورة شخصية.</li>
                    <li>شهادة تدريب معتمدة من GMS Academy.</li>
                    <li>اجتياز مقابلة القبول (Interview) لتحديد مدى ملاءمتك للبرنامج.</li>
                </ul>
            {/snippet}
        </CollapseCard>
        <CollapseCard {isCurrentLangAr} >
            {#snippet title()}
                <span>
                    {
                        isCurrentLangAr ?
                            "متى يمكنني دخول امتحانات الزمالة البريطانية؟" : 
                            "What are the stages of the training program?"
                    }
                </span>
            {/snippet}
            {#snippet content()}
                <ul class={[
                        "list-disc",
                        isCurrentLangAr ? "mr-5" : "ml-5",
                    ]}
                >
                    <li>يمكن التقديم لامتحان Part A بعد سنتين من بدء البرنامج.</li>
                    <li>يمكن التقديم لامتحان Part B بعد سنتين ونصف أو أكثر، حسب جاهزيتك واستكمال الحالات العملية.</li>
                </ul>
            {/snippet}
        </CollapseCard>
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
                <p>جميع المحاضرات النظرية تُعقد أونلاين عبر تطبيق Zoom.</p>
                <ul class={[
                        "mt-2",
                        isCurrentLangAr ? "mr-5" : "ml-5",
                    ]}
                >
                    <li>&gt; يمكنك التفاعل مع المحاضرين بالصوت والصورة أثناء المحاضرات.</li>
                    <li>&gt; مدة الجزء النظري 5-7 أشهر، يتبعها التدريب العملي وورش العمل.</li>
                </ul>
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
                <p>نعم، يتم تدريس MFDS & MFD خلال نفس مدة البرنامج (3 سنوات)، ويُجرى امتحانها خلال السنة الأولى.</p>
            {/snippet}
        </CollapseCard>
        <CollapseCard {isCurrentLangAr} >
            {#snippet title()}
                <span>
                    {
                        isCurrentLangAr ?
                            "ما هي طبيعة امتحان الزمالة البريطانية؟" : 
                            "What are the stages of the training program?"
                    }
                </span>
            {/snippet}
            {#snippet content()}
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
            {/snippet}
        </CollapseCard>
    
        <CollapseCard {isCurrentLangAr} >
            {#snippet title()}
                <span>
                    {
                        isCurrentLangAr ?
                            "كيف يمكنني تنظيم وقتي بين العمل في الخليج والدراسة في مصر؟" : 
                            "What are the stages of the training program?"
                    }
                </span>
            {/snippet}
            {#snippet content()}
                <p>تم تصميم البرنامج خصيصًا ليلائم أطباء الأسنان العاملين في الخليج.</p>
                <p>السفر إلى مصر كل 4-5 أسابيع لمدة قصيرة لمتابعة الحالات دون التأثير على عملك.</p>
                <p>المحاضرات النظرية أونلاين بالكامل، مما يوفر عليك الوقت والتكاليف.</p>
            {/snippet}
        </CollapseCard>
    
        <CollapseCard {isCurrentLangAr} >
            {#snippet title()}
                <span>
                    {
                        isCurrentLangAr ?
                            "ماذا لو فاتتني إحدى الرحلات لمتابعة الحالات؟" : 
                            "What are the stages of the training program?"
                    }
                </span>
            {/snippet}
            {#snippet content()}
                <p>يمكن تعويض أي جلسة متابعة وفق جدول مرن يتناسب مع مواعيد الأطباء.</p>
                <p>يتم توفير دعم مستمر لضمان استكمال جميع متطلبات التدريب.</p>
            {/snippet}
        </CollapseCard>
    
        <CollapseCard {isCurrentLangAr} >
            {#snippet title()}
                <span>
                    {
                        isCurrentLangAr ?
                            "هل هناك دعم مالي أو تسهيلات في الدفع؟" : 
                            "What are the stages of the training program?"
                    }
                </span>
            {/snippet}
            {#snippet content()}
                <p>نعم، يمكن دفع الرسوم على أقساط شهرية مريحة.</p>
            {/snippet}
        </CollapseCard>
    
        <CollapseCard {isCurrentLangAr} >
            {#snippet title()}
                <span>
                    {
                        isCurrentLangAr ?
                            "هل يمكنني العمل في أي دولة بعد الحصول على الزمالة؟" : 
                            "What are the stages of the training program?"
                    }
                </span>
            {/snippet}
            {#snippet content()}
                <p>نعم! شهادة الزمالة البريطانية معترف بها في الخليج وأوروبا وكندا، مما يفتح لك فرصًا مهنية دولية.</p>
                <p>تتيح لك الشهادة الحصول على درجة أخصائي تقويم الأسنان مباشرة بعد التخرج.</p>
            {/snippet}
        </CollapseCard>
    
        <CollapseCard {isCurrentLangAr} >
            {#snippet title()}
                <span>
                    {
                        isCurrentLangAr ?
                            "هل هناك إمكانية لاسترداد الرسوم في حال قررت عدم الاستمرار؟" : 
                            "What are the stages of the training program?"
                    }
                </span>
            {/snippet}
            {#snippet content()}
                <p>في حالة الانسحاب قبل بدء البرنامج، يتم استرداد رسوم التسجيل.</p>
                <p>بعد بدء البرنامج، يمكن مناقشة الحالات الخاصة وفقًا للسياسة المالية.</p>
            {/snippet}
        </CollapseCard>
    
        <CollapseCard {isCurrentLangAr} >
            {#snippet title()}
                <span>
                    {
                        isCurrentLangAr ?
                            "هل يوفر البرنامج سكنًا أو تسهيلات إقامة أثناء فترات التدريب العملي؟" : 
                            "What are the stages of the training program?"
                    }
                </span>
            {/snippet}
            {#snippet content()}
                <p>نعم، يتم تقديم توصيات للإقامة بأسعار مناسبة بالقرب من مقر التدريب.</p>
            {/snippet}
        </CollapseCard>
    
        <CollapseCard {isCurrentLangAr} >
            {#snippet title()}
                <span>
                    {
                        isCurrentLangAr ?
                            "هل هناك متابعة بعد إنهاء البرنامج؟" : 
                            "What are the stages of the training program?"
                    }
                </span>
            {/snippet}
            {#snippet content()}
                <p>نعم، يستمر الدعم المهني والتواصل مع الخريجين لمساعدتهم في مسيرتهم المهنية.</p>
                <p>يمكن للخريجين حضور ورش عمل متقدمة مستقبلاً.</p>
            {/snippet}
        </CollapseCard>
    </div>
    <div class="w-full h-12 bg-linear-0 from-white via-white to-white/0 flex justify-center items-center absolute bottom-0">
        <button
            class="text-[#0000EE] hover:text-[#FF0000] cursor-pointer p-2 transition duration-100"
            onclick={() => isCardsListOpen = !isCardsListOpen}
        >
            { 
                isCardsListOpen ?
                    isCurrentLangAr ? "إظهار أقل" : "Show less"
                    : isCurrentLangAr ? "إظهار المزيد" : "Show more" 
            }
        </button>
    </div>
</div>