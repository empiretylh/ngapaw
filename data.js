const data = [
    // quotes by original ngapaw developer
    "ကုဒ်မပြနဲ့။ စကားပဲများ။",
    "သတ္တိရှိရင် ငါ့လို page ထောင်ပေါလိုက်။",
    "စောက်ပေါလုပ်မနေနဲ့။ ငါတို့အားလုံး error တက်နေပြီ။",
    "ဒီနေ့ error တက်တယ်ဆိုပြီးအရှူံးမပေးလိုက်ပါနဲ့။ \n မနက်ဖြန်လည်းတက်အုန်းမှာပါ။",
    "မရှင်းလန်းနီးဆိုတာ မရှင်းရင်လန်းနီးပါ။",
    "ရှိသေးလားဗျ။ ဘီလျံနာကြီးဖြစ်ချင်လို့ ကုဒ်ရေးတဲ့ငပေါလေးတွေ။",
    "မင်းကောင်မလေးက ဂျပန်မှာအလုပ်လုပ်ရင်း လင်ရသွားပြီကွ။",
    "ရှိသေးလားဗျ။ ငါအိုင်ဒီယာပေးမယ်။ \n မင်းကုဒ်ရေးဆိုတဲ့စွန့်ဦးတီထွင်ဆရာကြီးတွေ။",
    "အရင်က ဘာဂျာမဲ့တဲ့ကောင်။ မင်းကိုမှ ကိုးကွယ်တတ်လာတာ။",
    "ပညာတွေလည်း ရပါတယ်။ \n ပညာတွေလည်း စုံပါပြီ။ \n ပညာတတ်ကြီး ဖြစ်နေပါပြီ။ \n ပညာပေါင်းစုံမြင်ဖူးသွားပြီ။ \n ပညာတွေလည်း မရတော့ဘူး။",
    "ကယ်ကြပါအုန်း။ \n ဖလက်တာရေးပြီး အူးနှောက်ဖလက်ပြသွားလို့။",
    "ရင့်ကျက်သွားပြီးနောက်ပိုင်း Open source တွေနဲ့ပဲ ကြမ်းတော့တယ်။",
    "မေး - ရည်းစားရှိလား။ \n ဖြေ - ရည်းစားမရှိတဲ့ developer",
    "ငတ်လို့လုပ်စားနေတယ်များထင်နေလား။ \n အေး ငတ်လို့လုပ်စားနေတာ။",
    "မင့်တို့လိုမပေါဘူး။ ရည်းစားရှိတယ်။ စိတ်ဆိုးပြီးဘလော့ခံထားရတာတခုပဲ။",
    "၃လလောက် သင်တန်းတက်ပြီး programming guru ကြီးဖြစ်သွားချင်တဲ့ မင့်ရောဂါတော့ ငါလည်းမကယ်နိုင်ဘူး။",
    "စော်ဘဲဆိုတာတွေက တခဏ။ ကုဒ်ဒင်းက ထာဝရ။",
    "Believe or not. 'ပေါပေါ' is typical boyfriend material. ",
    "Developer တွေ CDM လုပ်လိုက်ပါပြီခင်ဗျာ။",
    "Code Line တထောင်ရေးလိုက်မယ်။ \n အချစ်တပွဲတော့ ဆင်နွှဲဖို့သတ္တိမရှိဘူးဟေ့။",
    "Javascript is not hard. You guys are just stupid.",
    "ဒါဟာ ဗုဒ္ဓဘာဂျာ Laravel နိုင်ငံတော်ကြီးကွ။",
    "လင်ယူတာအပြစ်လား",
    "အခုငါလိင်မာနေပြီ ဘယ်သူကြောင့်လဲ?",
    "ကုဒ်ရေးခြင်းဖြင့် နိုင်ငံကိုကယ်တင်ဖို့ အချိန်ရောက်ပြီ။",
    "ကမ္ဘာကျော်ဖင်ယားသူကြီးဖြစ်ကိုဖြစ်ရပါမယ်။",
    "Gangbang Master မဟုတ်ပါဘူးအမေရယ်။ Kanban Master ပါ။",
    `
    ခိုင်းမှလုပ်တာ နွား
    မခိုင်းပဲလုပ်ရင်တော့ Window Update
    ကိုယ့်ဟာကိုယ်လုပ်ရရင် Linux
    Ecosystem တွေဝယ်ထည့်ရရင် Apple
    တောသားတွေအကုန်ကြိုက်တာတော့ Flutter
    `,
    "Flutter ရေးမယ်၊ စော်ဝိုက်မယ်။",
    "တနေ့ကျရင် 'ရော့ဟယ် ရော့ဟယ်'ဆိုပြီး ပိုက်ဆံထုပ်နဲ့ပေါက်အမ်းနိုင်တဲ့အထိကို ကုဒ်ရေးပစ် ။",
    "ဆင်းရဲမှာကြောက်၍ Code ရေးသင်ရာမှ အခုထိလည်း မချမ်းသာသေးသူများ",
    `မြန်မာပြည်မြေမြတ်မဟာပေါ်တွင် ပွင့်ခဲ့ပြီးသောအဆူဆူသော developer ဘုရားကြီးများကို ရှိခိုးဦး၃ကြိမ်ချလိုက်ပါတယ်။`,
    "ရန်ကုန်ကဘဲကြီးတွေ ဘန်ကောက်မှာလင်ရသွားကုန်ကြပြီ။",

    // famous quotes in developer communities
    "ကျွန်တော်ကကုဒ်ရေးမှာပါ ချီးမနယ်ပါဘူး။",
    
    // quotes during 'are we dating the same developer arc'
    "Are we dating the same developer?",
    `'ကောင်လေးက php developer ပါ'
    Sis he's already a red flag`,

    "ဟဲ့နင့်ရည်းစား project လိုက်ရင်း client ဘဲကြီးနဲ့ညားသွားပြီ။",
    "Developer မမတွေပလေးပြီဆို ရှယ်ပဲ",
    "ရန်ကုန်မှာဆိုးနေတာ မင်းတို့ ပီအိတ်ခ်ျပီဒတ်ပလော်ဘာတွေ",
    "Developer နဲ့ ONS ပြီး Error အတူတူရှာကြတာလား ?",
    
    //Thura Lin Htut in Ngapaw
    "ကျွန်တော်က ဖူးစတက် ဒတ်ပလော်ဘာပါ ဒါမဲ့ ပိုက်ဆံမရှိပါဘူး",
    "Code ရေးပြီး ဘယ်လို ပိုက်ဆံရှာရတာလဲ",
    "ကျွန်တော်အစ်ကိုက ကွန်ပျူတာဘွဲ့ရပါ။ သူအခု ဆိုက်ကားနင်းနေပါတယ်။",
    "ကျွန်တော်က React Developer ပါ။ လူတွေရှေ့ရောက်ရင် Hacker လို့ထင်အောင်လို့ `npm install` ကို ခဏခဏ လုပ်ပါတယ်။",    
    "Android Studio ကို Ram 4 Gb နဲ့ သုံးလို့ရပါတယ် 👌",   
   ]

module.exports = data;
