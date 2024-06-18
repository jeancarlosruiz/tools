import ClampConvertion from "@/components/clampConvertion/clampConvertion";
import PageHeader from "@/components/pageHeader/pageHeader";

function Home() {
  return (
    <main className="app-container">
      <PageHeader
        title="Responsive Font Sizing"
        description="Make your font-size responsive with this clamp generator 📏"
      />
      <ClampConvertion />
    </main>
  );
}

export default Home;
