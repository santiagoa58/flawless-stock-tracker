export const sanitizeLabel = (label: string) => {
  return label.replace(/[~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '');
};
