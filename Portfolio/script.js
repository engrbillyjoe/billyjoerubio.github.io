document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio Loaded Successfully ✅");

  // === Scroll Animation (safe for all pages) ===
  const fadeItems = document.querySelectorAll(".container, .project-card");
  if (fadeItems.length > 0) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.2 });
    fadeItems.forEach(item => observer.observe(item));
  }

  // === Modal Functionality (only runs on project page) ===
  const modal = document.getElementById("projectModal");
  if (modal) {
    const modalImg = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const closeModal = document.querySelector(".close");

    // === Detailed Project Data ===
    const projectData = {
      marilao: {
        title: "500kV/230kV Marilao EHV Substation",
        img: "images/marilao_substation.jpg",
        desc: `
          Contributed to the configuration, testing, and commissioning of the <strong>Extra High Voltage (EHV)</strong> 
          500kV/230kV Marilao Substation under NGCP standards. Responsibilities included performing 
          <strong>protection relay settings validation, signal loop testing, and secondary circuit verification</strong> 
          across multiple feeders and busbar protection schemes. Integrated SCADA data points for remote 
          operation and monitoring, ensuring <strong>accurate telemetry and reliable interlocking</strong> between primary 
          and backup systems. Delivered <strong>end-to-end functionality verification</strong> in compliance with grid protection protocols.
        `
      },
      laoag: {
        title: "Laoag 1 & 2 130MW Solar Power Plant",
        img: "images/laoag_solar.jpg",
        desc: `
          Provided <strong>SCADA integration, protection relay configuration, and end-to-end testing</strong> 
          for the 130MW Laoag Solar Projects (Phase 1 & 2). Configured <strong>IEC 60870-5-104 and IEC 61850 communication</strong> 
          between relays, PPC systems, and the control room HMI. Validated analog and digital point mapping, 
          command operations, and alarm functionalities. Ensured <strong>real-time power monitoring, reactive power control</strong>, 
          and smooth synchronization with NGCP dispatch centers, contributing to stable renewable power generation.
        `
      },
      sanjose: {
        title: "San Jose & Cordon Solar Projects",
        img: "images/sanjose_solar.jpg",
        desc: `
          Supported <strong>relay configuration, NDME (Network Disturbance Monitoring Equipment) setup,</strong> 
          and <strong>data acquisition integration</strong> for multiple solar power facilities. Conducted functional tests on 
          protection relays (feeder, transformer, and differential types) and verified event and disturbance recordings. 
          Calibrated communication parameters to achieve <strong>seamless coordination between plant relays and NGCP’s 
          substation systems</strong>. Produced technical reports outlining system improvements, settings validation, 
          and protocol verification.
        `
      },
      tiwi: {
        title: "Tiwi Binary Geothermal Power Plant & Tiwi C NGCP Substation",
        img: "images/tiwi_geothermal.jpg",
        desc: `
          Managed <strong>SCADA configuration, protection relay setup, and signal integration</strong> for 
          the Tiwi Binary Geothermal Power Plant and Tiwi C NGCP Substation interconnection. Configured and tested 
          <strong>relay communication protocols</strong> (IEC 104/61850), control logic, and system interlocks for reliable 
          coordination between geothermal units and the substation. Conducted <strong>end-to-end signal testing</strong> between 
          generators, switchgear, and control systems to ensure <strong>grid safety and voltage stability</strong> during operation.
        `
      },
      taft: {
        title: "Taft Solar Power Project",
        img: "images/taft_solar.jpg",
        desc: `
          Responsible for <strong>HV and PV SCADA integration, relay protection setup, and PPC (Power Plant Controller) configuration</strong>. 
          Implemented <strong>data acquisition and control logic</strong> to enable AGC and AVC functionality for both inverters 
          and the grid interface. Conducted <strong>system-wide communication testing</strong> between devices using Modbus and IEC 61850, 
          ensuring <strong>stable operation, accurate telemetry, and reactive power regulation</strong>. Supported 
          <strong>grid synchronization</strong> during initial energization and power injection testing.
        `
      },
      ppc: {
        title: "Power Plant Control (PPC) System Configuration",
        img: "images/ppc_control.jpg",
        desc: `
          Designed, configured, and validated <strong>Automatic Generation Control (AGC)</strong> and 
          <strong>Automatic Voltage Control (AVC)</strong> functions within Power Plant Controllers for 
          various solar and hybrid power projects. Developed logic for <strong>active and reactive power control</strong> 
          to comply with NGCP’s <strong>Variable Renewable Energy (VRE) performance standards</strong>. 
          Conducted internal PPC tests including <strong>Active Power Constraint, Reactive Power Capability,</strong> 
          and <strong>Voltage Regulation</strong> modes to ensure precise control behavior. Delivered <strong>comprehensive 
          testing documentation and operational validation reports</strong> for grid compliance and plant performance certification.
        `
      }
    };

    // === Open Modal on Click ===
    document.querySelectorAll(".project-card").forEach(card => {
      card.addEventListener("click", () => {
        const projectKey = card.getAttribute("data-project");
        const data = projectData[projectKey];
        if (data) {
          modalImg.src = data.img;
          modalTitle.textContent = data.title;
          modalDesc.innerHTML = data.desc; // use innerHTML for formatted content
          modal.style.display = "flex";
        }
      });
    });

    // === Close Modal ===
    if (closeModal) {
      closeModal.addEventListener("click", () => modal.style.display = "none");
    }
    window.addEventListener("click", e => {
      if (e.target === modal) modal.style.display = "none";
    });
  }

  // === Highlight current page link ===
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
