package ANNULAIRE_SAE_MMI.MMI.repository;

import ANNULAIRE_SAE_MMI.MMI.model.groupe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface groupeRepository extends JpaRepository<groupe, Long> {
}