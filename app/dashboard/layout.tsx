import AdminLayout from "@/components/layouts/admin-layout"
import ProtectedRoute from "@/components/protected-route"

export default function DashboardLayout({ children }) {
  return (
    <ProtectedRoute allowedRoles={["donor"]}>
      <AdminLayout>{children}</AdminLayout>
    </ProtectedRoute>
  )
}
