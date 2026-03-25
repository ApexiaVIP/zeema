const Footer = () => {
  return (
    <footer className="py-10 bg-background border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg font-bold tracking-[0.15em] text-bright">ZEEMA</p>
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Zeema. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
