import MainLayout from "@/components/layouts/main-layout";

export default function AccountDeletePage() {
  return (
    <MainLayout>
      <main className="min-h-screen py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white p-8 shadow-xl rounded-lg">
            <h1 className="text-3xl font-bold text-red-600 mb-8 text-center">Delete Account Request</h1>
            
            <p className="mb-6 text-gray-700 leading-relaxed">
              If you wish to delete your account and associated data from the Rokther Sondhane App, please follow the steps below:
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Steps to Delete Your Account:</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 pl-4">
                <li>Log in to the Rokther Sondhane App with your registered account.</li>
                <li>Navigate to the Settings section.</li>
                <li>Select Support & contact with us and confirm your request.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Deletion Policy:</h2>
              <p className="mb-3 text-gray-700">Once your account is deleted:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
                <li>All personally identifiable information (e.g., name, email, and phone) will be permanently removed.</li>
                <li>Any donation history and associated data will be erased within 30 days.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you face any issues, contact us at <a href="mailto:blooddonorbd.island@gmail.com" className="text-red-600 hover:text-red-700 underline">blooddonorbd.island@gmail.com</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
