package ANNULAIRE_SAE_MMI.MMI.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
public class sae {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String annee, semestre, domaine, ueCorrespondante, competences, lienSite, lienProductions;
    private LocalDate dateDebut, dateFin;

    private Integer maxPersonnesParGroupe;

    @ElementCollection
    private List<String> imagesIllustration;

    @OneToMany(mappedBy = "sae", cascade = CascadeType.ALL)
    private List<groupe> groupes = new ArrayList<>();

    public sae() {}

    public Long getId() { return id; } public void setId(Long id) { this.id = id; }
    public String getAnnee() { return annee; } public void setAnnee(String annee) { this.annee = annee; }
    public String getSemestre() { return semestre; } public void setSemestre(String semestre) { this.semestre = semestre; }
    public String getDomaine() { return domaine; } public void setDomaine(String domaine) { this.domaine = domaine; }
    public String getUeCorrespondante() { return ueCorrespondante; } public void setUeCorrespondante(String ueCorrespondante) { this.ueCorrespondante = ueCorrespondante; }
    public String getCompetences() { return competences; } public void setCompetences(String competences) { this.competences = competences; }
    public String getLienSite() { return lienSite; } public void setLienSite(String lienSite) { this.lienSite = lienSite; }
    public String getLienProductions() { return lienProductions; } public void setLienProductions(String lienProductions) { this.lienProductions = lienProductions; }
    public LocalDate getDateDebut() { return dateDebut; } public void setDateDebut(LocalDate dateDebut) { this.dateDebut = dateDebut; }
    public LocalDate getDateFin() { return dateFin; } public void setDateFin(LocalDate dateFin) { this.dateFin = dateFin; }
    public Integer getMaxPersonnesParGroupe() { return maxPersonnesParGroupe; } public void setMaxPersonnesParGroupe(Integer max) { this.maxPersonnesParGroupe = max; }
    public List<String> getImagesIllustration() { return imagesIllustration; } public void setImagesIllustration(List<String> imagesIllustration) { this.imagesIllustration = imagesIllustration; }
    public List<groupe> getGroupes() { return groupes; } public void setGroupes(List<groupe> groupes) { this.groupes = groupes; }

    public void addGroupe(groupe g) {
        groupes.add(g);
        g.setSae(this);
    }

    public Double getMoyenneSae() {
        if (groupes.isEmpty()) return 0.0;
        return groupes.stream().flatMap(g -> g.getEtudiants().stream())
                .mapToDouble(etudiant::getNote).average().orElse(0.0);
    }
}