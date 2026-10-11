import { Routes, Route } from "react-router-dom";
import Layout from "@/components/common/Layout";
import ScrollToTop from "@/components/common/ScrollToTop";  // ← ضيف ده

import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
// import ServiceDetail from "@/pages/ServiceDetail";
import AiAgents from "@/pages/services/AiAgents";
import ErpBusinessApplications from "@/pages/services/ErpBusinessApplications";
import SoftwareDevelopment from "@/pages/services/SoftwareDevelopment";
import CloudInfrastructure from "@/pages/services/CloudInfrastructure";
import NetworkConnectivity from "@/pages/services/NetworkConnectivity";
import SurveillanceAccessControl from "@/pages/services/SurveillanceAccessControl";
import Industries from "@/pages/Industries";
import PartnersClients from "@/pages/PartnersClients";
import Contact from "@/pages/Contact";
import ThankYou from "@/pages/ThankYou";
import NotFound from "@/pages/NotFound";
import WhatsAppButton from "@/components/common/WhatsAppButton";  // ← ضيف ده

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />

          {/* Service Detail Pages */}
          <Route path="/services/ai-agents" element={<AiAgents />} />
          <Route path="/services/erp-business-applications" element={<ErpBusinessApplications />} />
          <Route path="/services/software-development" element={<SoftwareDevelopment />} />
          <Route path="/services/cloud-infrastructure" element={<CloudInfrastructure />} />
          <Route path="/services/network-connectivity" element={<NetworkConnectivity />} />
          <Route path="/services/surveillance-access-control" element={<SurveillanceAccessControl />} />

          {/* Fallback */}
          {/* <Route path="/services/:slug" element={<ServiceDetail />} /> */}

          <Route path="/industries" element={<Industries />} />
          <Route path="/partners-clients" element={<PartnersClients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you/:type" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      {/* Scroll to Top Button — ظاهر في كل الصفحات */}
      <ScrollToTop />
            <WhatsAppButton />

    </>
  );
}