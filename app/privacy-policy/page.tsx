import MainLayout from "@/components/layouts/main-layout"

export default function PrivacyPolicyPage() {
  return (
   <MainLayout>
      <main className="min-h-screen py-8">
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-4xl">
          <div className="bg-[#238c09] text-white p-4 rounded-t-lg mb-6">
            <h1 className="text-3xl font-bold text-center">প্রাইভেসি পলিসি</h1>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-[#3f51b5]">এই অ্যাপস এর কাজ কি? কেন ইনস্টল করবেন?</h2>
            <p className="mb-4">
              ✓ এটি মূলত Blood Search Application, আমরা অনেক সময় আমাদের প্রয়োজনীয় রক্তের গ্রুপ খোঁজার জন্য বিভিন্ন ফেসবুক গ্রুপ বা
              স্যোসাইল মিডিয়াতে পোস্ট করে থাকি, অপেক্ষা করতে হয় কেউ কখন যোগাযোগ করবেন। এই অ্যাপ্লিকেশনের মাধ্যমে আপনি নিজেই আপনার
              কাঙ্কিত এরিয়াতে Blood Search করে নিজেই ডোনারের সাথে যোগাযোগ করতে পারবেন।
            </p>
            <p className="mb-4">
              ✓ রেজিস্টারকৃত ইউজারের ডাটা হতেই আমরা ডোনার ডাটা কালেকশন করে থাকি। তাই এটি ব্যবহারের জন্য বর্তমানে রেজিস্টেশন বাধ্যতামূলক করা
              হয়েছে।
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-[#3f51b5]">ব্যবহারবিধিঃ</h2>
            <p className="mb-4">
              ✓ অ্যাপ্লিকেশনটি ইনস্টল করার পরে অবশ্যই রেজিস্টেশন করতে হবে, রেজিস্টেশনের সময় অবশ্যই ভেলিড মোবাইল নাম্বার ব্যবহার করতে
              হবে। অন্যথায়, ওটিপি ছাড়া আপনার রেজিস্টেশন অসম্পূর্ণ রয়ে যাবে।
            </p>
            <p className="mb-4">
              ✓ রক্ত খোঁজার সময় আপনাকে FIND DONOR এ ক্লিক করে আপনার কাঙ্কিত রক্তের গ্রুপ, বিভাগ, জেলা ও এরিয়া সিলেক্ট করে শর্টলিস্ট করে
              নিতে পারবেন।
            </p>
            <p className="mb-4">
              ✓ ব্লাড ডোনেশন করার পরে, আপনাকে অবশ্যই Add Donation করে নিতে হবে। এই ক্ষেত্রে ডাটা ফিল্টার করতে এবং সিস্টেমের জন্য ট্র্যাক
              রাখতে সহজ হবে।
            </p>
            <p className="mb-4">✓ ব্লাড দেওয়ার পর ডোনেশন হিস্টোরি এড করলে আপনার আইডি পরবর্তী ৩ মাস unavailable থাকবে।</p>
            <p className="mb-4">
              ✓ আপনি অসুস্থতা বোধ করলে আপনার প্রোফাইল Inactive করে দিতে পারবেন। প্রোফাইল Inactive থাকলে আপনার প্রোফাইল লক হয়ে যাবে।
            </p>
            <p className="mb-4">✓ শরীর ফিট রাখার কৌশল ও ব্লাড দেওয়ার আগে-পরে কি খাওয়া উচিত সেই চার্ট পাবেন।</p>
            <p className="mb-4">✓ স্থান পরিবর্তনের সাথে সাথে চাইলে অ্যাপসেও লোকেশন চেঞ্জ করে নিতে পারবেন।</p>
            <p className="mb-4">✓ গুরুত্বপূর্ণ Website link পাবেন।</p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-3 text-[#3f51b5]">যোগাযোগ</h2>
            <p className="mb-4">
              আপনার যদি আমাদের প্রাইভেসি পলিসি সম্পর্কে কোনো প্রশ্ন বা পরামর্শ থাকে, দয়া করে আমাদের সাথে যোগাযোগ করুন।
            </p>
            <p className="mb-1">ইমেইল: boloddonorbd.island@gmail.com</p>
            <p className="mb-4">ইমেইল: boloddonorbd.island@gmail.com</p>
          </section>
        </div>
      </main>
   </MainLayout>
  )
}
