type EmailTemplateProps = {
  name: string;
  email: string;
  company: string;
  message: string;
}

export const EmailTemplate = ({ name, email, company, message }: Readonly<EmailTemplateProps>) => (
  <div>
    <h1>Welcome, {name}!</h1>

    <p>email: {email}</p>
    <p>company: {company}</p>
    <p>message: {message}</p>
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
