interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate = ({ firstName }: Readonly<EmailTemplateProps>) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <a
      style={{
        paddingInline: "2rem",
        paddingBlock: "1rem",
        borderRadius: ".5rem",
        background: "blue",
        color: "white",
      }}
      href="https://google.com"
    >
      Google
    </a>
  </div>
);
