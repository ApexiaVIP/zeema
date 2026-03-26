const Footer = () => {
  return (
    <footer className="py-10 bg-background border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={zeemaLogo} alt="Zeema" className="h-8" />
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Zeema. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
