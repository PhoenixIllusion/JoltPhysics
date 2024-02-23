/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Jolt Physics", "index.html", [
    [ "Architecture of Jolt Physics", "index.html#architecture-jolt-physics", null ],
    [ "Bodies", "index.html#bodies", [
      [ "Types", "index.html#body-types", null ],
      [ "Creating Bodies", "index.html#creating-bodies", null ],
      [ "Multithreaded Access", "index.html#autotoc_md60", null ],
      [ "Single Threaded Access", "index.html#single-threaded-access", null ],
      [ "Shapes", "index.html#shapes", [
        [ "Creating Shapes", "index.html#creating-shapes", null ],
        [ "Saving Shapes", "index.html#saving-shapes", null ],
        [ "Convex Radius", "index.html#convex-radius", null ],
        [ "Center of Mass", "index.html#center-of-mass", null ],
        [ "Creating Custom Shapes", "index.html#creating-custom-shapes", null ]
      ] ],
      [ "Sensors", "index.html#sensors", null ],
      [ "Soft Bodies", "index.html#soft-bodies", [
        [ "Soft Body Contact Listeners", "index.html#soft-body-contact-listener", null ],
        [ "Soft Body Work In Progress", "index.html#soft-body-wip", null ]
      ] ]
    ] ],
    [ "Constraints", "index.html#constraints", [
      [ "Constraint Motors", "index.html#constraint-motors", null ],
      [ "Breakable Constraints", "index.html#breakable-constraints", null ]
    ] ],
    [ "Collision Detection", "index.html#collision-detection", [
      [ "Broad Phase", "index.html#broad-phase", null ],
      [ "Narrow Phase", "index.html#narrow-phase", null ],
      [ "Collision Filtering", "index.html#collision-filtering", null ],
      [ "Continuous Collision Detection", "index.html#continous-collision-detection", null ],
      [ "Ghost Collisions", "index.html#ghost-collisions", null ]
    ] ],
    [ "Character Controllers", "index.html#character-controllers", null ],
    [ "The Simulation Step", "index.html#the-simulation-step", null ],
    [ "Conventions and Limits", "index.html#conventions-and-limits", null ],
    [ "Big Worlds", "index.html#big-worlds", null ],
    [ "Deterministic Simulation", "index.html#deterministic-simulation", null ],
    [ "Rolling Back a Simulation", "index.html#rolling-back-a-simulation", null ],
    [ "Working With Multiple Physics Systems", "index.html#working-with-multiple-physics-systems", null ],
    [ "Debug Rendering", "index.html#debug-rendering", null ],
    [ "The Simulation Step in Detail", "index.html#the-simulation-step-in-detail", [
      [ "Broad Phase Update Prepare", "index.html#broad-phase-update-prepare", null ],
      [ "Broad Phase Update Finalize", "index.html#broad-phase-update-finalize", null ],
      [ "Step Listeners", "index.html#step-listeners-update", null ],
      [ "Apply Gravity", "index.html#apply-gravity-update", null ],
      [ "Determine Active Constraints", "index.html#determine-active-constraints", null ],
      [ "Build Islands from Constraints", "index.html#build-islands-from-constraints", null ],
      [ "Find Collisions", "index.html#find-collisions", null ],
      [ "Setup Velocity Constraints", "index.html#setup-velocity-constraints", null ],
      [ "Finalize Islands", "index.html#finalize-islands", null ],
      [ "Set Body Island Idx", "index.html#set-body-island-idx", null ],
      [ "Solve Velocity Constraints", "index.html#solve-velocity-constraints", null ],
      [ "Pre Integrate", "index.html#pre-integrate", null ],
      [ "Integrate & Clamp Velocities", "index.html#integrate-and-clamp-velocities", null ],
      [ "Post Integrate", "index.html#post-integrate", null ],
      [ "Find CCD Contacts", "index.html#find-ccd-contacts", null ],
      [ "Resolve CCD Contacts", "index.html#resolve-ccd-contacts", null ],
      [ "Finalize Contact Cache, Contact Removed Callbacks", "index.html#finalize-contact-cache", null ],
      [ "Solve Position Constraints, Update Bodies Broad Phase", "index.html#solve-position-constraints", null ],
      [ "Soft Body Prepare", "index.html#soft-body-prepare", null ],
      [ "Soft Body Collide", "index.html#soft-body-collide", null ],
      [ "Soft Body Simulate", "index.html#soft-body-simulate", null ],
      [ "Soft Body Finalize", "index.html#soft-body-finalize", null ]
    ] ],
    [ "Jolt Physics Samples", "md__docs_2_samples.html", [
      [ "General Controls", "md__docs_2_samples.html#autotoc_md5", null ],
      [ "The Tests", "md__docs_2_samples.html#autotoc_md6", [
        [ "Vehicles", "md__docs_2_samples.html#autotoc_md7", null ],
        [ "Rig (Ragdolls)", "md__docs_2_samples.html#autotoc_md8", null ],
        [ "Soft Body", "md__docs_2_samples.html#autotoc_md10", null ],
        [ "Character", "md__docs_2_samples.html#autotoc_md11", null ],
        [ "Water", "md__docs_2_samples.html#autotoc_md12", null ],
        [ "Constraints", "md__docs_2_samples.html#autotoc_md13", null ],
        [ "General", "md__docs_2_samples.html#autotoc_md14", null ],
        [ "Shapes & Scaled Shapes", "md__docs_2_samples.html#autotoc_md15", null ]
      ] ]
    ] ],
    [ "Performance Test", "md__docs_2_performance_test.html", [
      [ "Commandline options", "md__docs_2_performance_test.html#autotoc_md2", null ],
      [ "Output", "md__docs_2_performance_test.html#autotoc_md3", null ],
      [ "Results", "md__docs_2_performance_test.html#autotoc_md4", null ]
    ] ],
    [ "Release Notes", "md__docs_2_release_notes.html", [
      [ "Unreleased changes", "md__docs_2_release_notes.html#autotoc_md17", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md18", null ],
        [ "Improvements", "md__docs_2_release_notes.html#autotoc_md19", null ],
        [ "Removed functionality", "md__docs_2_release_notes.html#autotoc_md20", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md21", null ]
      ] ],
      [ "v4.0.2", "md__docs_2_release_notes.html#autotoc_md22", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md23", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md24", null ]
      ] ],
      [ "v4.0.1", "md__docs_2_release_notes.html#autotoc_md25", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md26", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md27", null ]
      ] ],
      [ "v4.0.0", "md__docs_2_release_notes.html#autotoc_md28", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md29", null ],
        [ "Removed functionality", "md__docs_2_release_notes.html#autotoc_md30", null ],
        [ "New supported platforms", "md__docs_2_release_notes.html#autotoc_md31", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md32", null ]
      ] ],
      [ "v3.0.0", "md__docs_2_release_notes.html#autotoc_md33", null ],
      [ "v2.0.1", "md__docs_2_release_notes.html#autotoc_md34", null ],
      [ "v2.0.0", "md__docs_2_release_notes.html#autotoc_md35", [
        [ "Major new functionality", "md__docs_2_release_notes.html#autotoc_md37", null ],
        [ "New supported compilers", "md__docs_2_release_notes.html#autotoc_md38", null ],
        [ "New supported platforms", "md__docs_2_release_notes.html#autotoc_md39", null ]
      ] ],
      [ "v1.1.0", "md__docs_2_release_notes.html#autotoc_md40", null ],
      [ "v1.0.0", "md__docs_2_release_notes.html#autotoc_md41", null ]
    ] ],
    [ "Breaking API Changes", "md__docs_2_a_p_i_changes.html", [
      [ "Changes between v4.0.2 and latest", "md__docs_2_a_p_i_changes.html#autotoc_md36", null ],
      [ "Changes between v4.0.0 and v4.0.2", "md__docs_2_a_p_i_changes.html#autotoc_md42", null ],
      [ "Changes between v3.0.1 and v4.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md43", null ],
      [ "Changes between v2.0.1 and v3.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md44", null ],
      [ "Changes between v1.1.0 and v2.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md45", null ],
      [ "Changes between v1.0.0 and v1.1.0", "md__docs_2_a_p_i_changes.html#autotoc_md46", null ],
      [ "Changes between v0.0.0 and v1.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md47", null ]
    ] ],
    [ "Building and Using Jolt Physics", "md__build_2_r_e_a_d_m_e.html", [
      [ "Build Types", "md__build_2_r_e_a_d_m_e.html#autotoc_md49", null ],
      [ "Includes", "md__build_2_r_e_a_d_m_e.html#autotoc_md50", null ],
      [ "Defines", "md__build_2_r_e_a_d_m_e.html#autotoc_md51", null ],
      [ "Logging & Asserting", "md__build_2_r_e_a_d_m_e.html#autotoc_md53", null ],
      [ "Custom Memory Allocator", "md__build_2_r_e_a_d_m_e.html#autotoc_md54", null ],
      [ "Building", "md__build_2_r_e_a_d_m_e.html#autotoc_md55", null ],
      [ "Other Build Tools", "md__build_2_r_e_a_d_m_e.html#autotoc_md56", null ],
      [ "Link Errors", "md__build_2_r_e_a_d_m_e.html#autotoc_md57", null ],
      [ "Illegal Instruction Error", "md__build_2_r_e_a_d_m_e.html#autotoc_md58", null ],
      [ "Doxygen on Windows", "md__build_2_r_e_a_d_m_e.html#autotoc_md59", null ]
    ] ],
    [ "Projects Using Jolt", "md__docs_2_projects_using_jolt.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_a_a_b_b_tree_builder_8cpp.html",
"_constraint_manager_8h.html#acbbaf4aa1ca19ae6a91452046a99062c",
"_indexed_triangle_8h.html#a36dddc469fdd08411ce6fb341a59f7bd",
"_path_constraint_8cpp.html",
"_serializable_attribute_typed_8h.html#a564e5bd12360a28431c73574690dd1b8",
"_triangle_grouper_morton_8h_source.html",
"class_any_hit_collision_collector.html#a037964d4624c351fe863295ebe465c91",
"class_body_interface.html#a7f730135a74e9cb798d8a7d6c49acefb",
"class_broad_phase_quad_tree.html#a0b2255def43618e472f268d426596a46",
"class_collide_convex_vs_triangles.html#a13228a63f38c3ba1b6cf83671456f6e5",
"class_constraint_manager.html#aa6041abc2a70cc411e4d814c9dbf43f2",
"class_cylinder_shape.html#ac3f61c0e5ec4913f57a7842fcd8569fe",
"class_distance_constraint.html#a1f191ffd4cf8e11747be8b483a71f298",
"class_group_filter.html#aeb0b5a6c4c4c4d2d08c8df62942a7525",
"class_job_system_1_1_barrier.html",
"class_matrix.html#abf7221c00ea5a8e8bdcbac0c9082d38e",
"class_object_stream.html#a5feef3b87da292623ebf2a04c7c3482ea9dffbf69ffba8bc38bc4e01abf4b1675",
"class_physics_scene.html#a279e3c7758abc7691ab0ecf067083f1e",
"class_quat.html#a23c4e00d9d6905c284c728cf3e184934",
"class_result.html#ab3d845db638a6a51467760867bfc472a",
"class_shared_lock.html#a423a99cd3233c75dbf47e664351bab08",
"class_soft_body_contact_settings.html#a7e2a6ccb37566e38c25aa4841abbbead",
"class_state_recorder_impl.html#a77d8f8732e3193c3d785845147870806",
"class_tracked_vehicle_controller.html#a56d16548d8180759d16746c4e4024ba5",
"class_u_vec4.html#acfceebc6fc876a55c008bff9fc78b005",
"class_vehicle_collision_tester_cast_cylinder.html#abdc5564939bc37738299098769cbbcbc",
"class_wheeled_vehicle_controller.html#a0a8a164e3c506f3763973ac2ae4cc656",
"index.html#solve-velocity-constraints",
"struct_compound_shape_1_1_cast_shape_visitor.html#ae3d1ce73b6255f42f50e9acb10608477",
"struct_physics_update_context_1_1_step.html#a6be869a18ebbdd1cc59cd2b27da5e488"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';