import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./projectpage.css";
import "./capstone.css";
import announcementsVideo from "../assets/videos/Announcements.mp4";
import notificationVideo from "../assets/videos/SystemAdminNotifications.mp4";
import MenuRoleVideo from "../assets/videos/MenuRole.mp4";
import LoginVideo from "../assets/videos/login.mp4";

import approverdashboardVideo from "../assets/videos/ApproverDashboard.mp4";
import approverrequirementlistVideo from "../assets/videos/ApproverRequirementList.mp4";
import approverapproverassistantVideo from "../assets/videos/ApproverApproverAssistants.mp4";
import approverclearancerequests from "../assets/videos/ApproverClearanceRequests.mp4";
import approveractionsVideo from "../assets/videos/ApproverActions.mp4";
import approveractivitylogs from "../assets/videos/ApproverActivityLogs.mp4";


import systemAdminDashboardVideo from "../assets/videos/SystemAdminDashboard.mp4";
import systemanadmintoolsVideo from "../assets/videos/SystemAdminTools.mp4";
import systemanalticsVideo from "../assets/videos/SystemAnalytics.mp4";
import systemguidelinesVideo from "../assets/videos/SystemGuidelines.mp4";
import systemadminsetclearancetimelineVideo from "../assets/videos/SystemAdminSetClearanceTimeline.mp4";
import systemviewfacultyimporthistoryVideo from "../assets/videos/SystemAdminViewFacultyImportHistory.mp4";
import systemadminaccesscontrol from "../assets/videos/SystemAdminAccessControl.mp4";
import systemadminactivitylogs from "../assets/videos/SystemAdminActivityLogs.mp4";
import systemAdminCollegeOfficeConfigurationVideo from "../assets/videos/SystemAdminCollege&OfficeConfiguration.mp4";
import SystemAdminFacultyDataDumpVideo from "../assets/videos/SystemAdminFacultyDataDump.mp4";
import SystemAdminManageSystemUsersVideo from "../assets/videos/SystemAdminManageSystemUsers.mp4";

import assistantdashboardVideo from "../assets/videos/AssistantDashboard.mp4";
import assistantclearancerequestVideo from "../assets/videos/Assistantclearancerequest.mp4";

import facultyDashboardVideo from "../assets/videos/facultyDashboard.mp4";
import facultyClearanceRevordsVideo from "../assets/videos/FacultyClearanceRecords.mp4";

import analyticsAdminToolVideo from "../assets/videos/AnaylticsAdmintTools.mp4";
import analyticsAdminActivityLogsVideo from "../assets/videos/AnaylticsAdminActivityLogs.mp4";
import analyticsAdminDashboardVideo from "../assets/videos/AnaylticsAdminDashboard.mp4";

type PageDemoProps = {
  title: string;
  page: DemoPage[];
  onOpenVideo: (video: string) => void;
  className?: string;
  image?: string;
};

type DemoPage = {
  name: string;
  video: string;
};

function PageDemo({ title, page, image, onOpenVideo }: PageDemoProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      {image && <img src={image} alt={title} style={{ width: '100%' }} />}
      <h2 style={{ fontFamily: 'impact, sans-serif', fontSize: '32px', margin: '0', color: '#332a26', textTransform: 'none', letterSpacing: 'normal' }}>{title}</h2>

<div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
  {page.map((skill, index) => (
<div
  key={skill.name}
  onClick={() => onOpenVideo(skill.video)}
  role="button"
  tabIndex={0}
  onKeyDown={(event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpenVideo(skill.video);
    }
  }}
  style={{
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '5px',
    cursor: 'pointer',
  }}
>
  <span
    style={{
      fontSize: '16px',
      lineHeight: '19px',
      color: '#555',
      width: '32px',
      flexShrink: 0,
      fontWeight: 'bold',
    }}
  >
    {String(index + 1).padStart(2, "0")}
  </span>

  <p
    style={{
      fontSize: '16px',
      lineHeight: '19px',
      color: '#555',
      margin: 0,
    }}
  >
    { skill.name}
  </p>
</div>
  ))}
</div>
    </div>
  );
}
type CapstonePageProps = {
  page: 1 | 2 | 3;
};

export default function CapstonePage({ page: initialPage = 1 }: CapstonePageProps) {
  const [page, setPage] = useState<1 | 2 | 3>(initialPage);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openVideo = (video: string) => {
    setSelectedVideo(video);
  };

  return (
    <div
      className={`project-page project-page-${page}`}
      style={{
        backgroundColor: "#fefefe",
        width: "calc(30% + 900px)", 
        marginLeft: "calc(35% - 450px)", 
        paddingLeft: "20px",
        paddingRight: "20px",
        border: "2px solid #1c1c1c",
        borderTop: "none",
        marginTop: "-2px",
      }}
    >
      {selectedVideo && mounted && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
          onClick={() => setSelectedVideo(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "grid",
            placeItems: "center",
            padding: "24px",
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          }}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            style={{ position: "relative", width: "min(960px, 100%)" }}
          >
            <button
              type="button"
              aria-label="Close video"
              onClick={() => setSelectedVideo(null)}
              style={{
                position: "absolute",
                top: "-40px",
                right: 0,
                border: 0,
                background: "transparent",
                color: "#fff",
                cursor: "pointer",
                fontSize: "32px",
              }}
            >
              ×
            </button>
            <video
              key={selectedVideo}
              src={selectedVideo}
              controls
              autoPlay
              style={{ display: "block", width: "100%", maxHeight: "80vh" }}
            />
          </div>
        </div>,
        document.body
      )}


      {/* ================= PAGE 1 ================= */}

      {page === 1 && (
        <div className={`project-content project-content-${page}`}>
          <div className={`project-header project-header-${page}`}>
            <h1 className={`project-title project-title-${page}`}>
              End of the Term Faculty Clearance Management System
            </h1>

            <p className={`project-subtitle project-subtitle-${page}`}>
              xavier university ateneo cagayan de oro 
              <span> | 2025 - 2026</span>
            </p>
          </div>

          <div className={`project-description project-description-${page}`}>
            <p>
              A responsive desktop and mobile web application developed for Xavier University – Ateneo de Cagayan to digitize and streamline the end-of-term faculty clearance process.
            </p>

            <p>
              The system enables faculty members to submit and track their clearance status in real time, while university offices can efficiently review, approve, and manage clearance requirements through role-based dashboards.
            </p>

            <p>
              It centralizes the clearance workflow, reduces manual processing, improves transparency, and enhances administrative efficiency. The project received the KSRA Award for its innovation and institutional impact.
            </p>
          </div>

          <div className={`project-footer project-footer-${page}`}>
            <div className={`project-role project-role-${page}`}>
              <span className={`label label-${page}`}>ROLE</span>

              <h3 className={`project-role-title project-role-title-${page}`}>
                Full Stack Developer
              </h3>
            </div>

            <div className="page-navigation">
              <div className={`next-project next-project-${page}`}>
                <span className="next-arrow" onClick={() => setPage(2)}>→</span>
                <p className={`next-text next-text-${page}`}>Next page</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= PAGE 2 ================= */}
  {page === 2 && (
  <div className={`project-content project-content-${page}`}>
    <div className={`project-header project-header-${page}`}>

      <h1 className={`project-title project-title-${page}`}>
        Interactive Demo
      </h1>

      <p className={`project-subtitle project-subtitle-${page}`}>
        DESKTOP VERSION
      </p>
    </div>

    <div className={`demo-grid demo-grid-${page}`} style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>


      {/* COLUMN 1 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
        <PageDemo
          title="Login"
          page={[
            {
              name: "Login",
              video: LoginVideo,
            },
            {
              name: "Menu Role",
              video: MenuRoleVideo,
            }
          ]}
          onOpenVideo={openVideo}
        />

        <PageDemo
          title="Analytics Admin"
          page={[
            {
              name: "Dashboard",
              video: analyticsAdminDashboardVideo,
            },
            {
              name: "System Guideline",
              video: systemguidelinesVideo,
            },
            {
              name: "Announcements",
              video: announcementsVideo,
            },
            {
              name: "Tools",
              video: analyticsAdminToolVideo,
            },
            {
              name: "System Analytics",
              video: systemanalticsVideo,
            },
            {
              name: "Activity Logs",
              video: analyticsAdminActivityLogsVideo,
            },
            {
              name: "Notifications",
              video: notificationVideo,
            }
          ]}
          onOpenVideo={openVideo}
        />
      </div>

      {/* COLUMN 2 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
        <PageDemo
          title="Faculty"
          page={[
            {
              name: "Dashboard",
              video: facultyDashboardVideo,
            },
            {
              name: "Clearance Record",
              video: facultyClearanceRevordsVideo,
            },
            {
                name: "Notification",
                video: notificationVideo,
              },
            ]}
              onOpenVideo={openVideo}
            />


        <PageDemo
          title="Approver"
          page={[
            {
              name: "Dashboard",
              video: approverdashboardVideo,
            },
            {
              name: "Requirements List",
              video: approverrequirementlistVideo,
            },
            {
              name: "Clearance Requests",
              video: approverclearancerequests,
            },
            {
              name: "Actions",
              video: approveractionsVideo,
            },
            {
              name: "Approver Assistants",
              video: approverapproverassistantVideo,
            },
            /* {
              name: "Archived Clearance",
              video: "/videos/archived-clearance.mp4",
            }, */
            {
              name: "Activity Logs",
              video: approveractivitylogs,
            },
            {
              name: "Notifications",
              video: notificationVideo,
            }
          ]}
          onOpenVideo={openVideo}
        />
      </div>

      {/* COLUMN 3 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', flex: 1 }}>
        <PageDemo
          title="System Admin"
          page={[
            {
              name: "Dashboard",
              video: systemAdminDashboardVideo,
            },
            {
              name: "System Guideline",
              video: systemguidelinesVideo,
            },
            {
              name: "Announcements",
              video: announcementsVideo,
            },
            {
              name: "Tools",
              video: systemanadmintoolsVideo,
            },
            {
              name: "Set Clearance Timeline",
              video: systemadminsetclearancetimelineVideo,
            },
            {
              name: "College & Office Configuration",
              video: systemAdminCollegeOfficeConfigurationVideo,
            },
            {
              name: "Faculty Data Dump",
              video: SystemAdminFacultyDataDumpVideo,
            },
            {
              name: "Manage System Users",
              video: SystemAdminManageSystemUsersVideo,
            },
            {
              name: "Faculty Import History",
              video: systemviewfacultyimporthistoryVideo,
            },
            {
              name: "Access Control",
              video: systemadminaccesscontrol,
            },
            {
              name: "System Analytics",
              video: systemanalticsVideo,
            },
            {
              name: "Activity Logs",
              video: systemadminactivitylogs,
            },
            {
              name: "Notifications",
              video: notificationVideo,
            }
          ]}
          onOpenVideo={openVideo}
        />
      </div>

      {/* COLUMN 4 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', flex: 1 }}>
        <PageDemo
          title="Assistant Approver"
          page={[
            {
              name: "Dashboard",
              video: assistantdashboardVideo,
            },
            {
              name: "Clearance Requests",
              video: assistantclearancerequestVideo,
            },
            /*{
              name: "Archived Clearance",
              video: "/videos/archived-clearance.mp4",
            }, */
            {
              name: "Notifications",
              video: notificationVideo,
            }
          ]}
          onOpenVideo={openVideo}
        />
        <p style={{ margin: 0 }}>
          <a
            href="https://github.com/kemsk/BoysenBuddies-FacultyClearance"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "impact, sans-serif",
              fontSize: "32px",
              color: "#332a26",
              textTransform: "none",
              letterSpacing: "normal",
              textDecoration: "none",
            }}
          >
            Github Link
          </a>
        </p>
      </div>
    </div>
    <div className="page-navigation">
      <div className={`next-project next-project-${page}`}>
        <span className="prev-arrow" onClick={() => setPage(1)}>←</span>
        <p className={`next-text next-text-${page}`}>Previous page</p>
      </div>
      <div className={`next-project next-project-${page}`}>
        <span className="next-arrow" onClick={() => setPage(3)}>→</span>
        <p className={`next-text next-text-${page}`}>Next page</p>
      </div>
    </div>
  </div>
)}
{/* ================= PAGE 3 ================= */}

      {page === 3 && (
        <div className={`project-content project-content-${page}`}>
          <div className={`project-header project-header-${page}`}>
            <h1 className={`project-title project-title-${page}`}>
              Key Contributions
            </h1>
          </div>

          <div className={`contributions-list contributions-list-${page}`}>
            {[
              "Solely developed the frontend for a responsive mobile and desktop web application, designing and implementing reusable React components and major application pages.",
              "Implemented responsive UI/UX using React and Tailwind CSS, ensuring consistent layouts and functionality across screen sizes.",
              "Assisted with backend and database development, including MySQL integration, RESTful APIs, notifications, and activity logging.",
              "Implemented JWT-based authentication and authorization, contributing to secure user access and protected system functionality.",
              "Collaborated with the development team and real-world client using GitHub and Docker, conducting user interviews and requirements-gathering sessions to translate workflows and feedback into application features.",
            ].map((item, index) => (
              <div
                key={index}
                className={`contribution-item contribution-item-${page}`}
              >
                <span className="contribution-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="contribution-text">{item}</p>
              </div>
            ))}
          </div>

          <div className={`project-footer project-footer-${page}`}>

            <div className={`tech-stack tech-stack-${page}`}>
              Python / CSS / MongoDB / JavaScript / HTML
            </div>

            <div className="page-navigation">
              <div className={`next-project next-project-${page}`}>
                <span className="prev-arrow" onClick={() => setPage(2)}>←</span>
                <p className={`next-text next-text-${page}`}>Previous page</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
