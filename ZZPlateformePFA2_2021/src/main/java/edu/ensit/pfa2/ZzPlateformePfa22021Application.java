package edu.ensit.pfa2;

import edu.ensit.pfa2.entity.Role;
import edu.ensit.pfa2.entity.RoleName;
import edu.ensit.pfa2.entity.UserEnt;
import edu.ensit.pfa2.entity.UserRole;
import edu.ensit.pfa2.entity.algo.Contest;
import edu.ensit.pfa2.repository.ContestsRepo;
import edu.ensit.pfa2.repository.RoleRep;
import edu.ensit.pfa2.repository.UserE;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.annotation.PostConstruct;
import java.sql.Date;
import java.util.*;

@SpringBootApplication
public class ZzPlateformePfa22021Application {

	public static void main(String[] args) {
		SpringApplication.run(ZzPlateformePfa22021Application.class, args);
	}

	@Autowired
	private RoleRep roleRepository;
	@Autowired
	private UserE userRepository;
	@Autowired
	private PasswordEncoder encoder;
	@PostConstruct
	private void init() {
		List<UserRole> initRoles = new ArrayList<>();
		Set<UserRole> existsRole = new HashSet<>();

		if (!roleRepository.findByRoleName(RoleName.ROLE_ADMIN).isPresent()) {
			UserRole role = new UserRole();
			role.setPriority((short) 0);
			role.setRoleName(RoleName.ROLE_ADMIN);
			initRoles.add(role);
		}
		if (!roleRepository.findByRoleName(RoleName.ROLE_MANAGER).isPresent()) {
			UserRole role = new UserRole();
			role.setPriority((short) 1);
			role.setRoleName(RoleName.ROLE_MANAGER);
			initRoles.add(role);
		}
		if (!roleRepository.findByRoleName(RoleName.ROLE_ADMIN).isPresent()) {
			UserRole role = new UserRole();
			role.setPriority((short) 9);
			role.setRoleName(RoleName.ROLE_CANDIDATE);
			initRoles.add(role);
		}
		if (!initRoles.isEmpty()) {
			roleRepository.saveAll(initRoles);
		}
		roleRepository.findAll().forEach(existsRole::add);
		if (!userRepository.existsByUsername("admin")) {
			UserEnt admin = new UserEnt("admin", "admin", "admin@gmail.com", encoder.encode("admin"),
					"Admin City", null);
			admin.setRoles(existsRole);
			admin.setActivated(true);
			userRepository.save(admin);
		}
		initContests();

	}

	@Autowired
	ContestsRepo contestRepo;
	private void initContests() {
		Optional<Contest> contest = contestRepo.findByCode("toto contest");
		if(contest.isPresent()){
			if(!contest.get().isEnable()) {
				contest.get().setEnable(true);
				contestRepo.save(contest.get());
			}
			return;
		}
		Contest ctx = new Contest();
		ctx.setCode("toto contest");
		ctx.setDiscription("first created contest");
		ctx.setEnable(true);
		contestRepo.save(ctx);
	}
}
